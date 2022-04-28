import React, { useState, useCallback } from 'react';
import { Paper, TextField, Button, Typography } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import SkillPreview from '../Skills/Skill';
import { createSkill } from '../../actions/skills';
import RankingSlider from '../../components/rankingSlider/rankinSlider';

const SkillsForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [skillData, setSkillData] = useState({ name: '', skillIcon: '' });
  const [ranking, setRanking] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skillData.name.length && skillData.name.length) dispatch(createSkill(skillData));
  };
  const skillRanking = useCallback((value) => {
    setRanking(value);
  }, []);
  const clear = () => {
    setSkillData({ name: '', skillIcon: '' });
  };

  return (
    <Paper elevation={1} className={classes.paper}>
      <Typography variant='subtitle1' className={classes.typo}>
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
        <div className={classes.buttonsContainer}>
          <Button variant='contained' color='primary' size='small'>
            Publicar
          </Button>
          <Button variant='contained' color='secondary' size='small' onClick={clear}>
            Clear
          </Button>
        </div>
      </form>
      <div className={classes.preview}>
        <RankingSlider setRanking={skillRanking} />
        <SkillPreview skill={skillData} />
      </div>
    </Paper>
  );
};

export default SkillsForm;
