import React from 'react';
import { Container, TextField, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import svg from '../../images/undraw_mailbox_re_dvds.svg';

const ContactForm = () => {
  const classes = useStyles();

  return (
    <Container>
      <h3 className={classes.h3}>Contáctame</h3>
      <div className={classes.formContainer}>
        <div className={classes.svgContainer}>
          <Typography variant='subtitle2'>¿Qué esperas? Escríbeme y empecemos a trabajar juntos!</Typography>
          <img className={classes.svg} src={svg} alt='DevSvg'></img>
        </div>
        <form>
          <div className={classes.inputsFlex}>
            <TextField className={classes.inputs} name='nombre' label='Nombre' variant='filled'></TextField>
            <TextField className={classes.inputs} name='email' label='Email' variant='filled'></TextField>
          </div>
          <TextField className={classes.textArea} multiline minRows={3} placeholder='Mensaje' variant='filled'></TextField>
          <Button variant='contained' size='large' type='submit'>
            Envíar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;
