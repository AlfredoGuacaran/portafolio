import { makeStyles } from '@material-ui/core/styles';export default makeStyles((theme) => ({
  navbar: {
    background: 'transparent',
    backdropFilter: 'blur(6px)',
    height: '60px',
    padding: '0 120px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      padding: '0 30px',
    },
  },

  profileContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  fotoPerfil: {
    height: '50px',
    width: '50px',
    marginRight: '20px',
  },
  typo: {
    color: '#353535 ',
    fontFamily: 'helvetica ',
    fontWeight: 'bold ',
    fontSize: '18px ',
    textTransform: 'none',
    letterSpacing: '2px',
  },
  btnBgW: {
    background: 'white',
    marginLeft: '30px',
    borderRadius: '12px',
  },
  menu: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  btns: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));
