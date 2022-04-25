import React from 'react';import { Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import Svg from '../../images/undraw_developer_activity_re_39tg.svg';

const Heading = () => {
  const classes = useStyles();
  return (
    <Container className={classes.headingContainer}>
      <div className={classes.textContainer}>
        <Typography variant='h4'>Hola, Soy Alfredo</Typography>
        <Typography variant='h1'>Desarrollo Fullstack con Javascript</Typography>
        <Typography variant='body1'>
          Bienvenid@ a mi portafolio, aquí encontraras más información sobre mí, los proyectos que tengo para mostrarte, las tecnologias de uso y como contactarte conmigo.
        </Typography>
        <div className={classes.iconsContainer}>
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
      <img className={classes.svgImg} src={Svg} alt='DevSvg'></img>
    </Container>
  );
};

export default Heading;
