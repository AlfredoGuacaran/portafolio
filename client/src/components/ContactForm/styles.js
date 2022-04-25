import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  svgContainer: {
    textAlign: 'center',
  },

  h3: {
    fontFamily: 'helvetica ',
    fontWeight: 'bold ',
    fontSize: '20px',
    lineHeight: '24px',
    textAlign: 'left',
    color: '#353535',
  },
  svg: { width: '40%' },
  inputsFlex: {
    display: 'flex',
    gap: '10px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  inputs: {
    height: '56px',
  },
  textArea: {
    margin: '10px 0px',
    width: '100%',
  },
}));
