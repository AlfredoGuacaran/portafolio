import React from 'react';import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import makeStyles from './styles';

const App = () => {
  const classes = makeStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.appContainer}>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
