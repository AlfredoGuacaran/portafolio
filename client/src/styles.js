import { createTheme } from '@material-ui/core/styles';
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

theme.typography.body1 = {
  textAlign: 'justify',
};

export default theme;
