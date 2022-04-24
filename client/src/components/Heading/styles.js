import { makeStyles } from '@material-ui/core/styles';export default makeStyles((theme) => ({
  headingContainer: {
    height: 'calc(100vh)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  textContainer: {
    color: '#353535 ',
    maxWidth: '50%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  fotoPerfil: {
    height: '200px',
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      height: '150px',
      width: '150px',
    },
  },
  iconsContainer: {
    marginTop: '20px',
    fontSize: '40px',
    display: 'flex',
    justifyContent: 'start',
    gap: '15px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },

    '& > a': {
      color: '#787878',
    },

    '& > a:hover': {
      color: '#353535',
      cursor: 'pointer',
      transform: 'scale(1.05)',
    },

    '& > a:active': {
      transform: 'scale(0.95)',
    },
  },
}));
