import { makeStyles } from '@material-ui/core/styles';export default makeStyles((theme) => ({
  navbar: {
    boxShadow: 'none',
    background: 'linear-gradient(279.56deg, rgba(127,191,255, 0.8) 13.79%, rgba(127,191,255, 0.6) 34.18%, rgba(127,191,255, 0.1) 50.02%)',
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
    color: '#353535 !important',
    fontFamily: 'helvetica !important',
    fontWeight: 'bold !important',
    fontSize: '18px !important',
    textTransform: 'none',
    letterSpacing: '2px',
  },
  btnBgW: {
    background: 'white',
    marginLeft: '30px',
    borderRadius: '12px',
  },
}));
