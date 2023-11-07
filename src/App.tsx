import React from 'react';
import solarPunk from './assets/images/solarPunk.svg';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import Home from './Pages/Home';

function App() {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className='App' padding={ theme.spacing(small ? 2 : 8)}>
      <Box display={'flex'} justifyContent={`space-between`}>
        <img src={solarPunk} alt='' />

        <Stack flexDirection={`row`} gap={4}>
          <h3>Home</h3>
          <h3>Ver Todos</h3>
        </Stack>
      </Box>
      <Home />
      <header className='App-header'>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap'
        />
      </header>
    </Box>
  );
}

export default App;
