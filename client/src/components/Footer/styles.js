import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  footer: {
    background: '#232220',
    margin: '15px 0 0 0;',
    padding: '10px 40px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      padding: '0 20px',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  },
  typo: {
    color: '#353535 ',
    fontFamily: 'helvetica ',
    fontWeight: 'bold ',
    fontSize: '12px ',
    textTransform: 'none',
    letterSpacing: '2px',
  },

  fotoPerfil: {
    height: '50px',
    width: '50px',
  },
  iconsContainer: {
    fontSize: '40px',
    display: 'flex',
    justifyContent: 'start',
    gap: '15px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      fontSize: '25px',
    },

    '& > a': {
      color: '#787878',
    },

    '& > a:hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
    },

    '& > a:active': {
      transform: 'scale(0.95)',
    },
  },
}));
