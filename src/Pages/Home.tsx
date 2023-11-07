import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>

      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={small ? 'center' : 'flex-start'}
        mt={small ? '4rem' : '8rem'}
      >
        <Typography fontWeight={500} variant='h1' width={small ? '90%' : 400} alignSelf={'flex-start'}>
          Gestão de fichas para seu RPG bolado
        </Typography>
        <Button size='large' sx={{ width: small ? '90%' : 365, marginTop: 10, height: 61 }} variant='contained'>
          criar ficha
        </Button>
      </Box>
    </>
  );
};

export default Home;
