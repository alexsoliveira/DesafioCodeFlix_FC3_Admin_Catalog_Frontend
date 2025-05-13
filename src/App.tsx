import { createTheme } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import * as React from 'react';
import { Hearder } from './components/Hearder';
import { Layout } from './components/Layout';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component='main'
        sx={{
          height: '100vh',
          // backgroundColor: '#000',
        }}
      >
        <Hearder />
        <Layout>
          <h1>Olá mundo</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
