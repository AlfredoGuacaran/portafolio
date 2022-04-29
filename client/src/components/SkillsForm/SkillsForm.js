import React, { useState } from 'react';import { Paper, TextField, Button, Typography, Slider, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import SkillPreview from '../Skills/Skill';
import { createSkill } from '../../actions/skills';

const SkillsForm = () => {
  const dispatch = useDispatch();
  const { loadingStatus } = useSelector((state) => state.skills);
  const classes = useStyles();
  const [skillData, setSkillData] = useState({ name: '', skillIcon: '', ranking: 50 });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (skillData.name.length && skillData.skillIcon.length > 1) {
      dispatch(createSkill(skillData));
    }
  };

  const clear = () => {
    setSkillData({ name: '', skillIcon: '', ranking: 50 });
  };

  return (
    <Paper elevation={1} className={classes.paper}>
      <Typography variant='subtitle1' className={classes.title}>
        Agregar una nueva competencia técnica
      </Typography>
      <form className={`${classes.form} ${classes.root}`} autoComplete='false' noValidate onSubmit={handleSubmit}>
        <TextField
          name='name'
          label='Nombre del skill'
          variant='outlined'
          size='small'
          className={classes.textFile}
          value={skillData.name}
          onChange={(e) => setSkillData({ ...skillData, name: e.target.value })}
        />
        <div className={classes.fileContainer}>
          <FileBase type='file' multiple={false} onDone={({ base64 }) => setSkillData({ ...skillData, skillIcon: base64 })} />
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
          <Button variant='contained' color='secondary' size='small' onClick={clear}>
            Clear
          </Button>
        </div>
      </form>
      <div className={classes.preview}>
        {loadingStatus === 'noLoding' && <SkillPreview skill={skillData} />}
        {loadingStatus === 'loding' && <CircularProgress />}
      </div>
    </Paper>
  );
};

export default SkillsForm;
