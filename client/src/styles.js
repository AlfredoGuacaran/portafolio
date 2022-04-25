import { makeStyles, createTheme } from '@material-ui/core/styles';
const theme = createTheme();
theme.typography.h1 = {
  color: '#353535 ',
  fontFamily: `helvetica`,
  fontWeightRegular: 400,
  fontWeightBold: 700,
  fontSize: '70px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '60px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '40px',
  },
};
theme.background = {
  background: 'linear-gradient(230deg, rgba(127, 191, 255, 0.8) 13.79%, rgba(127, 191, 255, 0.6) 34.18%, rgba(127, 191, 255, 0.1) 50.02%)',
};

theme.typography.body1 = {
  textAlign: 'justify',
};

export default makeStyles({
  appContainer: {
    background: 'linear-gradient(230deg, rgba(127, 191, 255, 0.8) 8%, rgba(127, 191, 255, 0.6) 15%, rgba(127, 191, 255,0.05) 30%)',
    [theme.breakpoints.down('sm')]: {
      background: 'linear-gradient(230deg, rgba(127, 191, 255, 0.8) 4%, rgba(127, 191, 255, 0.6) 8%, rgba(127, 191, 255, 0.05) 16%)',
    },
  },
});

export { theme };
