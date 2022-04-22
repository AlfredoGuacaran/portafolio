import React from 'react';import { Container, Typography, Avatar } from '@material-ui/core';
import useStyles from './styles';

import fotoPerfil from '../../images/fotoperfil.jpg';

const Heading = () => {
  const clasess = useStyles();
  return (
    <Container className={clasess.headingContainer}>
      <div className={clasess.textContainer}>
        <Typography variant='h4'>Hola, Soy Alfredo</Typography>
        <Typography variant='h1'>Desarrollo Fullstack con Javascript</Typography>
        <Typography variant='h5'>
          Bienvenid@ a mi portafolio, aquí encontraras más información sobre mí, los proyectos que tengo para mostrarte, las tecnologias de uso y como contactarte conmigo.
        </Typography>
      </div>
      <Avatar alt='Foto Alfredo' src={fotoPerfil} className={clasess.fotoPerfil} />
    </Container>
  );
};

export default Heading;
