import React from 'react';
import AppBar from './components/AppBar';
import Main from './pages/Main';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar />
      <Container sx={{mb: 4, mt: 4}}>
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
