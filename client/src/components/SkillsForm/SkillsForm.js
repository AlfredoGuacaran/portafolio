import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button, Typography, Slider, CircularProgress, Zoom } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import SkillPreview from '../Skills/Skill';
import { createSkill, deleteSkill, updateSkill } from '../../actions/skills';

const SkillsForm = () => {
  const dispatch = useDispatch();
  const { loading, endLoading, currentSkill } = useSelector((state) => state.skills);
  const classes = useStyles();
  const [skillData, setSkillData] = useState({ name: '', skillIcon: '', ranking: 50 });
  const [loadState, setLoadState] = useState({ loading: false, endLoading: false });
  const [_currentSkill, setCurrentSkill] = useState(null);

  const clear = () => {
    setSkillData({ name: '', skillIcon: '', ranking: 50 });
    setCurrentSkill(null);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(skillData.name?.length && skillData.skillIcon?.length > 1)) return;
    if (_currentSkill) dispatch(updateSkill(skillData));
    if (!_currentSkill) dispatch(createSkill(skillData));

    clear();
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    dispatch(deleteSkill(_currentSkill._id));
    clear();
  };

  useEffect(() => {
    if (_currentSkill) setSkillData(_currentSkill);
  }, [_currentSkill]);

  useEffect(() => {
    setLoadState((prev) => ({ ...prev, loading, endLoading }));
    setTimeout(() => {
      setLoadState((prev) => ({ ...prev, endLoading: false }));
    }, 3000);
    setCurrentSkill(currentSkill);
  }, [loading, endLoading, currentSkill]);

  return (
    <Paper elevation={1} className={classes.paper}>
      <Typography variant='subtitle1' className={classes.title}>
        Agregar una nueva competencia técnica
      </Typography>

      <form className={`${classes.form} ${classes.root}`} autoComplete='false' noValidate onSubmit={handleSubmit}>
        <TextField
          required
          name='name'
          label='Nombre del skill'
          variant='outlined'
          size='small'
          className={classes.textFile}
          value={skillData.name}
          onChange={(e) => setSkillData({ ...skillData, name: e.target.value })}
        />
        <div className={classes.fileContainer}>
          <FileBase required type='file' multiple={false} onDone={({ base64 }) => setSkillData({ ...skillData, skillIcon: base64 })} />
        </div>
        <Typography variant='subtitle1' className={classes.label}>
          Prioridad para mostrar
        </Typography>
        <Slider
          value={skillData.ranking}
          onChange={(event, value) => setSkillData({ ...skillData, ranking: value })}
          aria-labelledby='discrete-slider-custom'
          step={10}
          valueLabelDisplay='auto'
          min={10}
        />
        <div className={classes.buttonsContainer}>
          <Button type='submit' onClick={handleSubmit} variant='contained' color='primary' size='small'>
            Publicar
          </Button>
          <Button variant='contained' size='small' onClick={clear}>
            Clear
          </Button>
          {_currentSkill && (
            <Button variant='contained' color='secondary' size='small' onClick={handleDelete}>
              Eliminar
            </Button>
          )}
        </div>
      </form>
      <div className={classes.preview}>
        {!loadState.loading && skillData.name.length ? <SkillPreview skill={skillData} /> : 'PREVIEW'}
        {loadState.loading && <CircularProgress />}
      </div>
      {loadState.endLoading && (
        <Zoom in={loadState.endLoading}>
          <Alert severity='success'>Skill creada</Alert>
        </Zoom>
      )}
    </Paper>
  );
};

export default SkillsForm;
