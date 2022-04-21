import React from 'react';
import { AppBar, Toolbar, Avatar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import fotoPerfil from '../../images/fotoperfil.jpg';

function Navbar() {
  const clasess = useStyles();
  return (
    <AppBar fullwidth='true' position='static' className={clasess.navbar}>
      <div className={clasess.profileContainer}>
        <Avatar alt='Foto Alfredo' src={fotoPerfil} className={clasess.fotoPerfil} />
        <Typography className={`${clasess.name} ${clasess.typo}`}>Alfredo Guacaran</Typography>
      </div>
      <Toolbar>
        <Button className={`${clasess.btnLink} ${clasess.typo}`}>{` Proyectos </>`}</Button>
        <Button variant='contained' className={`${clasess.btnBgW} ${clasess.typo}`}>
          Contactame
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
