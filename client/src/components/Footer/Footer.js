import React from 'react';import { AppBar, Toolbar, Avatar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import fotoPerfil from '../../images/fotoperfil.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar position='static' elevation={2} fullwidth='true' className={classes.footer}>
      <Toolbar>
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
      </Toolbar>
      <Avatar alt='Foto Alfredo' src={fotoPerfil} className={classes.fotoPerfil} />
      <div className={classes.typo}>Made by Alfredo Guacaran 2022</div>
    </AppBar>
  );
};

export default Footer;
