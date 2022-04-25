import React from 'react';import { AppBar, Toolbar, Avatar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import fotoPerfil from '../../images/fotoperfil.jpg';
import Menu from './Menu';

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position='sticky' elevation={2} fullwidth='true' className={classes.navbar}>
      <div className={classes.profileContainer}>
        <Avatar alt='Foto Alfredo' src={fotoPerfil} className={classes.fotoPerfil} />
        <Typography className={`${classes.name} ${classes.typo}`}>Alfredo Guacaran</Typography>
      </div>
      <Toolbar>
        <div className={classes.btns}>
          <Button className={`${classes.btnLink} ${classes.typo}`}>{` Proyectos </>`}</Button>
          <Button variant='contained' className={`${classes.btnBgW} ${classes.typo}`}>
            Contactame
          </Button>
        </div>
        <div className={classes.menu}>
          <Menu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
