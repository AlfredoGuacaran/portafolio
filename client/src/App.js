import React from 'react';import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Navbar />
      <Home />
    </MuiThemeProvider>
  );
};

export default App;
