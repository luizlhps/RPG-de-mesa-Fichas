import {
  Box,
  Button,
  Paper,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import Stats from '../assets/images/stats.svg';
import { SkillsTable } from '../Components/Table/Table';

const ProfileCreate = () => {
  const theme = useTheme();
  const breakHD = useMediaQuery(theme.breakpoints.down('lg'));
  const breakIn700 = useMediaQuery('(max-width:700px)');
  const small = useMediaQuery(theme.breakpoints.down('sm'));





  console.log(breakHD);
  return (
    <Box mt={7} bgcolor={theme.palette.background.paper} padding={small ? 3 : 6}>
      <Stack flexDirection={breakHD ? 'column' : 'row'} gap={3} rowGap={8}>
        <Box flex={1}>
          <Stack flexDirection={breakHD ? 'column' : 'row'} direction='row' gap={2} rowGap={2}>
            <TextField fullWidth label='Nome do Personagem' variant='outlined' />
            <TextField label='Idade' variant='outlined' />
            <TextField label='Altura' variant='outlined' />
          </Stack>
          <Stack flexDirection={breakHD ? 'column' : 'row'} mt={2} direction='row' gap={2} rowGap={2}>
            <TextField fullWidth label='Origem' variant='outlined' />
            <TextField label='Classe' variant='outlined' />
            <TextField label='Peso' variant='outlined' />
          </Stack>
          <Stack mt={6} direction='row' gap={2}>
            <Button
              fullWidth
              variant='contained'
              sx={{ color: theme.palette.background.default, flex: 1, fontWeight: 600, height: 45 }}
            >
              historia
            </Button>
            <Button
              fullWidth
              variant='contained'
              sx={{ color: theme.palette.background.default, flex: 1, fontWeight: 600, height: 45 }}
            >
              afinidade
            </Button>
          </Stack>
          <Stack flexDirection={breakIn700 ? 'column' : 'row'} gap={10} rowGap={4} mt={6} alignItems={'center'}>
            <img src={Stats}></img>
            <Stack width={'100%'} rowGap={2}>
              <TextField label='HP' variant='outlined' />
              <TextField label='MP' variant='outlined' />
              <TextField label='XP' variant='outlined' />
            </Stack>
          </Stack>
        </Box>
        <Box flex={2} display={'flex'} gap={2} >
          <SkillsTable/>
          <SkillsTable/>
          <SkillsTable/>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProfileCreate;
