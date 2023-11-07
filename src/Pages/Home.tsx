import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const Home = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box marginTop={25} display={'flex'} flexDirection={'column'} alignItems={small ? 'center' : 'flex-start'}>
        <Typography fontWeight={500} variant='h1' width={ small ? '90%' : 400}>
          Gestão de fichas para seu RPG bolado
        </Typography>
        <Button size='large' sx={{ width: small ? '90%' : 500, marginTop: 10, height: 61 }} variant='contained'>
          criar conta
        </Button>
      </Box>
    </>
  );
};

export default Home;
