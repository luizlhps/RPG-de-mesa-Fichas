import { FieldValues, useForm } from 'react-hook-form';

//mui
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Stack, useMediaQuery, useTheme } from '@mui/material';

//components
import { Slide, Slider } from '../Components/Slider/Slider';
import { Stepper } from '../Components/Stepper/Stepper';
import { StatsLayout } from '../Components/StatsLayout/StatsLayout';
import { AttacksTable } from '../Components/Table/Layouts/AttacksTable';
import { SkillsTable } from '../Components/Table/Layouts/SkillsTable';
import { AbilityTable } from '../Components/Table/Layouts/AbilityTable';

//hooks
import useSlider from '../hook/useSlider';
import useFetchHpMPAndSkillsPoints from '../hook/useFetchHpMPAndSkillsPoints';
import useFetchNewSheet from '../hook/useFetchNewSheet';

//utils
import falseData from '../utils/createFalseData';
import { InventoryTable } from '../Components/Table/Layouts/InventoryTable';

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
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  //fetch data and update atributes
  const { attributes, classes, originAttributes, setAttributes, sheet } = useFetchNewSheet();

  //fetch Hp and Mp
  const { skillsPoints, remainingOfSkilsPoints, setRemainingOfSkilsPoints } = useFetchHpMPAndSkillsPoints({
    attributes,
    originAttributes,
    setValue,
    watch,
  });

  //false data for tables
  const rows = falseData;

  const {
    handleContinueForm,
    handlePreviousForm,
    setSlideLength,
    setWidthSlide,
    setSlideIndex,
    slideIndex,
    widthSlide,
  } = useSlider();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };



  return (
    <Box
      mt={2}
      minHeight={'100%'}
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
          remainingOfSkilsPoints={remainingOfSkilsPoints}
          setAttributes={setAttributes}
          attributes={attributes}
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
                        {sheet && (
                          <SkillsTable
                            setRemainingOfSkilsPoints={setRemainingOfSkilsPoints}
                            watch={watch}
                            setValue={setValue}
                            quantityMax={skillsPoints}
                            rows={sheet.skills}
                          />
                        )}
                      </Box>
                      <Stack rowGap={2} flex={2}>
                        <AbilityTable rows={rows} />
                        <AttacksTable rows={rows} />
                      </Stack>
                    </Stack>
                  </>
                )}
              </Slide>
              <Slide minWidth={widthSlide}>
                <Stack flexDirection={breakIn860 ? 'column' : 'row'} gap={3} rowGap={2}>
                  <InventoryTable rows={rows} control={control} />
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
                    window.scrollTo({
                      top: 1200,
                       behavior: 'smooth',
                     });
                  }, 200);
                }}
                sx={{ cursor: 'pointer', /* ':hover': { fill: theme.palette.secondary.main } */ }}
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
                  }, 7);
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
