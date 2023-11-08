import { Box, Button, IconButton, Stack, TextField, useMediaQuery, useTheme } from '@mui/material';
import Stats from '../assets/images/stats.svg';
import { SkillsTable } from '../Components/Table/Layouts/SkillsTable';
import { TableComponent } from '../Components/Table';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const ProfileCreate = () => {
  const theme = useTheme();
  const breakHD = useMediaQuery(theme.breakpoints.down('lg'));
  const breakIn700 = useMediaQuery('(max-width:700px)');
  const breakIn860 = useMediaQuery('(max-width:860px)');
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  return (
    <Box mt={6} bgcolor={theme.palette.background.paper} padding={small ? 3 : 6}>
      <Stack flexDirection={'row'} rowGap={2} gap={2} justifyContent={'center'} flexWrap={'wrap'} mb={7}>
        <Box display={'flex'} gap={2} flex={1} alignItems={'center'}>
          <ArrowBackIcon sx={{ cursor: 'pointer', ':hover': { fill: theme.palette.secondary.main } }} />
          <Button variant='contained' fullWidth sx={{ maxWidth: 140, height: 24 }}></Button>
          <Button
            variant='contained'
            fullWidth
            sx={{ maxWidth: 140, height: 24, background: theme.palette.primary.light }}
          ></Button>
          <ArrowForwardIcon sx={{ cursor: 'pointer', ':hover': { fill: theme.palette.secondary.main } }} />
        </Box>
      </Stack>

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
        <Stack flex={2} flexDirection={breakIn860 ? 'column' : 'row'} gap={3} rowGap={2}>
          <Box flex={1.4}>
            <SkillsTable />
          </Box>
          <Stack rowGap={2} flex={2}>
            <TableComponent.Root>
              <TableComponent.Header field='HABILIDADES' />
              <TableComponent.ContentCustom rows={rows} rowField='name' height={160}>
                <AccessibleForwardIcon onClick={() => console.log('oi')}></AccessibleForwardIcon>
              </TableComponent.ContentCustom>
              <TableComponent.Footer />
            </TableComponent.Root>

            <TableComponent.Root>
              <TableComponent.Header field='ATAQUES' />
              <TableComponent.ContentCustom rows={rows} rowField='name' height={160}>
                <AccessibleForwardIcon onClick={() => console.log('oi')}></AccessibleForwardIcon>
              </TableComponent.ContentCustom>
              <TableComponent.Footer />
            </TableComponent.Root>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProfileCreate;
