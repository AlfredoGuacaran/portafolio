import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';

export default function SimpleMenu() {
  const clasess = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose} className={clasess.typo}>{`Proyectos </>`}</MenuItem>
        <MenuItem onClick={handleClose} className={clasess.typo}>
          Contactame
        </MenuItem>
      </Menu>
    </div>
  );
}
