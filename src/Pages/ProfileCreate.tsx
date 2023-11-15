import { useEffect, useState } from 'react';
import { SkillsTable } from '../Components/Table/Layouts/SkillsTable';
import { TableComponent } from '../Components/Table';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Slide, Slider } from '../Components/Slider/Slider';
import useSlider from '../hook/useSlider';

import { Stepper } from '../Components/Stepper/Stepper';
import { StatsLayout } from '../Components/StatsLayout/StatsLayout';
import { FieldValues, useForm } from 'react-hook-form';
import { Box, Button, Stack, useMediaQuery, useTheme } from '@mui/material';
import { OptionAttribute } from '../Components/StatsLayout/AtributteField/types/OptionAttribute';
import { Api } from '../services/axiosConfig';
import { IClasses } from '../services/types';

const ProfileCreate = () => {
  const theme = useTheme();
  const breakHD = useMediaQuery(theme.breakpoints.down('lg'));
  const breakIn700 = useMediaQuery('(max-width:700px)');
  const breakIn860 = useMediaQuery('(max-width:860px)');
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  const [attributes, setAttributes] = useState<OptionAttribute[]>();
  const [originAttributes, setOriginAttributes] = useState<any>();
  const [classes, setclasses] = useState<IClasses[]>();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const res = Api.get('/new').then((res) => {
      console.log(JSON.parse(res.data.sheet));
      const arrayOfAttributes = res.data.attributes;
      const classesApi = res.data.classes;

      setOriginAttributes(arrayOfAttributes);
      const attributesModify = arrayOfAttributes.map((item: number, index: number) => {
        return { id: index + 1, value: item, fieldCurrent: null };
      });

      //Atributtes
      setAttributes(attributesModify);

      //classes
      setclasses(classesApi);
    });
  }, []);

  const validadeFieldAttritube = (attributesField: any) => {
    if (!attributesField) return;

    const arrayOfValuesAttributes: number[] = Object.values(attributesField);
    let haveError = false;
    let amountOf0: number[] = [];

    arrayOfValuesAttributes.forEach((element) => {
      //adds a numeric element if it is zero
      if (element == 0) {
        amountOf0.push(element);
      }

      //verify if the Amountof0 the zeros of array is greater than 1
      if (amountOf0.length > 1) {
        haveError = true;
        return;
      }

      // verify if any null number
      if (element === null) {
        haveError = true;
        return;
      }

      //verify if are all field correct
      if (originAttributes) {
        const originAttributesSorted = JSON.stringify(originAttributes.sort());
        const arrayOfValuesAttributesSorted = JSON.stringify(originAttributes.sort());

        if (originAttributesSorted !== arrayOfValuesAttributesSorted) return (haveError = true);
      }
    });
    return haveError;
  };

  useEffect(() => {
    const attributesField = watch('attributes');
    const haveError = validadeFieldAttritube(attributesField);

    if (!haveError && attributesField) {
      Api.post('/new/hp-mp', {
        class: 1,
        level: 1,
        attributes: attributesField,
      });

    }
  }, [attributes]); 

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
        <StatsLayout
          setAttributes={setAttributes}
          attributes={attributes}
          breakHD={breakHD}
          breakIn700={breakIn700}
          errors={errors}
          control={control}
          classes={classes}
          register={register}
        />

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
