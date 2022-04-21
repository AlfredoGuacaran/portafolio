import React from 'react';
import { Container } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Theme } from './styles';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <MuiThemeProvider theme={Theme}>
      <Navbar />
      <Container maxWidth='xl'>
        <Home />
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
