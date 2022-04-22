import { makeStyles } from '@material-ui/core/styles';export default makeStyles((theme) => ({
  navbar: {
    background: 'transparent',
    height: '80px',
    padding: '0 120px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  profileContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  fotoPerfil: {
    height: '65px',
    width: '65px',
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
}));
