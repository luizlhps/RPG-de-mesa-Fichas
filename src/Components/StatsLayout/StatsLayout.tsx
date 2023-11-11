import { Autocomplete, Box, Button, Stack, TextField, useTheme } from '@mui/material';
import React, { useState } from 'react';
import Stats from '../../assets/images/stats.svg';
import { Control, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { numbersOnly } from '../../utils/masks';
import { InputNumbers } from '../InputFields/InputNumbers';
import { AtributteFieldCreate } from './AtributteField';

interface IProps {
  breakHD: boolean;
  breakIn700: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
}
//que tal ao invez de remover da lista colocar um parametro que se caso o valor da proprieda não esteja nula ele não aparece, caso ele selecione coloque o nome do campo
//e caso o valor novo é diferente do velho e tem o nome do field o field antigo vira null

export const StatsLayout = ({ breakHD, breakIn700, register, errors, control }: IProps) => {
  const [array, setArray] = useState([
    { id: 1, value: 4, fieldCurrent: null },
    { id: 2, value: 3, fieldCurrent: null },
    { id: 3, value: 3, fieldCurrent: null },
    { id: 4, value: 2, fieldCurrent: null },
    { id: 5, value: 1, fieldCurrent: null },
    { id: 6, value: 0, fieldCurrent: null },
  ]);

  const theme = useTheme();

  const defaultStyle = {
    position: 'absolute',
    width: 42,
    transform: 'translate(0, -50%)',
    top: '34%;',
    left: '2.5%',
    input: { textAlign: 'center', color: theme.palette.text.primary, fontSize: '16px' },

    '& input': {
      width: 42,
      border: 'none',
      bgcolor: 'transparent',
    },
    'input:focus-visible': {
      outline: 'none',
    },
  };
  console.log(array);
  return (
    <Box flex={1}>
      <Stack flexDirection={breakHD ? 'column' : 'row'} direction='row' gap={2} rowGap={2}>
        <TextField {...register('Name')} autoComplete='off' fullWidth label='Nome do Personagem' variant='outlined' />
        <TextField {...register('Height')} autoComplete='off' label='Altura' variant='outlined' />
      </Stack>
      <Stack flexDirection={breakHD ? 'column' : 'row'} mt={2} direction='row' gap={2} rowGap={2}>
        <TextField {...register('Class')} autoComplete='off' fullWidth label='Classe' variant='outlined' />
        <TextField {...register('Origin')} autoComplete='off' label='Origem' variant='outlined' />
        <TextField {...register('Weight')} autoComplete='off' label='Peso' variant='outlined' />
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
      <Stack flexDirection={breakIn700 ? 'column' : 'row'} gap={3} rowGap={4} mt={6} alignItems={'center'}>
        <Box position={'relative'}>
          <AtributteFieldCreate arrayOfOptions={array} fieldName='cha' setArray={setArray} style={defaultStyle} />
          <AtributteFieldCreate
            arrayOfOptions={array}
            fieldName='wis'
            setArray={setArray}
            style={{
              ...defaultStyle,
              ...{
                position: 'absolute',
                transform: 'translate(0, -50%)',
                top: '63%;',
                left: '3px',
              },
            }}
          />

          {/*  <InputNumbers control={control} nameField='Attributes.CHA' style={defaultStyle} /> */}
          <AtributteFieldCreate
            arrayOfOptions={array}
            fieldName='dex'
            setArray={setArray}
            style={{
              ...defaultStyle,
              ...{
                transform: 'translate(0, -50%)',
                top: '34%;',
                left: '75%',
              },
            }}
          />

          <AtributteFieldCreate
            arrayOfOptions={array}
            fieldName='con'
            setArray={setArray}
            style={{
              ...defaultStyle,
              ...{
                top: '63%;',
                left: '75%',
              },
            }}
          />

          <AtributteFieldCreate
            arrayOfOptions={array}
            fieldName='str'
            setArray={setArray}
            style={{
              ...defaultStyle,
              ...{
                top: '20%;',
                left: '38.5%',
              },
            }}
          />

          <AtributteFieldCreate
            arrayOfOptions={array}
            fieldName='int'
            setArray={setArray}
            style={{
              ...defaultStyle,
              ...{
                top: '77%;',
                left: '38.5%',
              },
            }}
          />

          <img src={Stats} alt='stats' />
        </Box>

        <Stack width={'100%'} rowGap={2}>
          <TextField {...register('HitPoints')} autoComplete='off' label='HP' variant='outlined' />
          <TextField {...register('ManaPoints')} autoComplete='off' label='MP' variant='outlined' />
          <TextField {...register('Defense')} autoComplete='off' label='DEF' variant='outlined' />
        </Stack>
      </Stack>
    </Box>
  );
};
