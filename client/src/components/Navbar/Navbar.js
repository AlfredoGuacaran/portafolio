import React from 'react';
import { AppBar, Toolbar, Avatar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import fotoPerfil from '../../images/fotoperfil.jpg';
import Menu from './Menu';

const Navbar = () => {
  const clasess = useStyles();
  return (
    <AppBar position='sticky' elevation={2} fullwidth='true' className={clasess.navbar}>
      <div className={clasess.profileContainer}>
        <Avatar alt='Foto Alfredo' src={fotoPerfil} className={clasess.fotoPerfil} />
        <Typography className={`${clasess.name} ${clasess.typo}`}>Alfredo Guacaran</Typography>
      </div>
      <Toolbar>
        <div className={clasess.btns}>
          <Button className={`${clasess.btnLink} ${clasess.typo}`}>{` Proyectos </>`}</Button>
          <Button variant='contained' className={`${clasess.btnBgW} ${clasess.typo}`}>
            Contactame
          </Button>
        </div>
        <div className={clasess.menu}>
          <Menu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
