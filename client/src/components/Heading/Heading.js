import React from 'react';
import { Container, Typography, Avatar } from '@material-ui/core';
import useStyles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import fotoPerfil from '../../images/fotoperfil.jpg';

const Heading = () => {
  const clasess = useStyles();
  return (
    <Container className={clasess.headingContainer}>
      <div className={clasess.textContainer}>
        <Typography variant='h4'>Hola, Soy Alfredo</Typography>
        <Typography variant='h1'>Desarrollo Fullstack con Javascript</Typography>
        <Typography variant='body1'>
          Bienvenid@ a mi portafolio, aquí encontraras más información sobre mí, los proyectos que tengo para mostrarte, las tecnologias de uso y como contactarte conmigo.
        </Typography>
        <div className={clasess.iconsContainer}>
          <a href='https://github.com/AlfredoGuacaran' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href='https://www.linkedin.com/in/alfredoguacaran/' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://api.whatsapp.com/send?phone=+56978184092' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faWhatsappSquare} />
          </a>
        </div>
      </div>
      <Avatar alt='Foto Alfredo' src={fotoPerfil} className={clasess.fotoPerfil} />
    </Container>
  );
};

export default Heading;
