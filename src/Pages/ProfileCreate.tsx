import axios from 'axios';
import { useEffect } from 'react';
import { SkillsTable } from '../Components/Table/Layouts/SkillsTable';
import { TableComponent } from '../Components/Table';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Slide, Slider } from '../Components/Slider/Slider';
import useSlider from '../hook/useSlider';

import { Stepper } from '../Components/Stepper/Stepper';
import { StatsLayout } from '../Components/StatsLayout/StatsLayout';
import { FieldValues, useForm, Controller } from 'react-hook-form';
import { Box, Button, Stack, TextField, useMediaQuery, useTheme } from '@mui/material';
const ProfileCreate = () => {
  const theme = useTheme();
  const breakHD = useMediaQuery(theme.breakpoints.down('lg'));
  const breakIn700 = useMediaQuery('(max-width:700px)');
  const breakIn860 = useMediaQuery('(max-width:860px)');
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const res = axios.get('http://127.0.0.1:5000/new').then((res) => {
      console.log(res);
    });
  }, []);

  const {
    handleContinueForm,
    handlePreviousForm,
    setSlideLength,
    setWidthSlide,
    setSlideIndex,
    slideIndex,
    widthSlide,
  } = useSlider();

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

  function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return { name, calories, fat, carbs, protein };
  }

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Box
      mt={6}
      bgcolor={theme.palette.background.paper}
      padding={small ? 2 : 6}
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
    >
      <Stepper
        handleContinueForm={handleContinueForm}
        handlePreviousForm={handlePreviousForm}
        setSlideIndex={setSlideIndex}
        slideIndex={slideIndex}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />

      <Stack flexDirection={breakHD ? 'column' : 'row'} gap={3} rowGap={8}>
        <StatsLayout breakHD={breakHD} breakIn700={breakIn700} errors={errors} control={control} register={register} />

        <Stack flex={2} flexDirection={breakIn860 ? 'column' : 'row'} gap={3} rowGap={2}>
          <Box position={'relative'} width={'100%'}>
            <Slider
              widthSlide={widthSlide}
              maxWidthSlide={1200}
              setSlideLength={setSlideLength}
              slideIndex={slideIndex}
              setWidthSlide={setWidthSlide}
              mediaBreak={breakHD}
            >
              <Slide minWidth={widthSlide}>
                {slideIndex === 0 && (
                  <>
                    <Stack flexDirection={breakIn860 ? 'column' : 'row'} gap={3} rowGap={2}>
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
                  </>
                )}
              </Slide>
              <Slide minWidth={widthSlide}>
                <Stack flexDirection={breakIn860 ? 'column' : 'row'} gap={3} rowGap={2}>
                  <TableComponent.Root>
                    <TableComponent.Header field='ATAQUES' />
                    <TableComponent.ContentCustom rows={rows} rowField='name' height={434}>
                      <AccessibleForwardIcon onClick={() => console.log('oi')}></AccessibleForwardIcon>
                    </TableComponent.ContentCustom>
                    <TableComponent.Footer />
                  </TableComponent.Root>
                </Stack>
              </Slide>
            </Slider>
          </Box>
        </Stack>
      </Stack>

      {breakHD && (
        <>
          <Stack flexDirection={'row'} rowGap={2} mt={5} gap={2} justifyContent={'center'} flexWrap={'wrap'} mb={7}>
            <Box display={'flex'} gap={2} flex={1} alignItems={'center'} justifyContent={'center'}>
              <ArrowBackIcon
                onClick={() => {
                  handlePreviousForm();
                  setTimeout(() => {
                    window.scrollTo(0, document.body.scrollHeight);
                  }, 10);
                }}
                sx={{ cursor: 'pointer', ':hover': { fill: theme.palette.secondary.main } }}
              />
              <Button
                variant='contained'
                fullWidth
                onClick={() => setSlideIndex(0)}
                sx={{
                  maxWidth: 140,
                  height: 24,
                  background: slideIndex === 1 ? theme.palette.primary.light : theme.palette.secondary.main,
                }}
              ></Button>
              <Button
                variant='contained'
                fullWidth
                onClick={() => setSlideIndex(1)}
                sx={{
                  maxWidth: 140,
                  height: 24,
                  background: slideIndex === 0 ? theme.palette.primary.light : theme.palette.secondary.main,
                }}
              ></Button>
              <ArrowForwardIcon
                onClick={() => {
                  handleContinueForm();
                  setTimeout(() => {
                    window.scrollTo(0, document.body.scrollHeight);
                  }, 10);
                }}
                sx={{ cursor: 'pointer', ':hover': { fill: theme.palette.secondary.main } }}
              />
            </Box>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default ProfileCreate;
