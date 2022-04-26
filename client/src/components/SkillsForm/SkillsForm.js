import React, { useState } from 'react';import { Paper, TextField, Button, Typography } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { dispatch } from 'react-redux';
import { CREATE } from '../../constants/actionTypes';

const SkillsForm = () => {
  const classes = useStyles();
  const [skillData, setSkillData] = useState({ name: '', seledtedFile: '' });
  const handleSubmit = () => {};
  return (
    <Paper elevation={1} className={classes.paper}>
      <Typography variant='subtitle1' className={classes.typo}>
        Agregar una nueva competencia técnica
      </Typography>
      <form className={`${classes.form} ${classes.root}`} autoComplete='false' noValidate onSubmit={handleSubmit}>
        <TextField fullwidth name='name' label='Nombre del skill' variant='outlined' size='small' className={classes.textFile} onChange={(e) => setSkillData({ ...skillData, name: e.target.value })} />
        <div className={classes.fileContainer}>
          <FileBase type='file' multiple={false} />
        </div>
        <div className={classes.buttonsContainer}>
          <Button variant='contained' color='primary' size='small'>
            Publicar
          </Button>
          <Button variant='contained' size='small'>
            Preview
          </Button>
          <Button variant='contained' color='secondary' size='small'>
            Clear
          </Button>
        </div>
      </form>
      <div className={classes.preview}>PREVIEW</div>
    </Paper>
  );
};

export default SkillsForm;
