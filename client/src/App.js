import React from 'react';import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import makeStyles from './styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const classes = makeStyles();
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div className={classes.appContainer}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
