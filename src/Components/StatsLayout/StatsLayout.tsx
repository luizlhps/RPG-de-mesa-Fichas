import { Autocomplete, Box, Button, Stack, TextField, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Stats from '../../assets/images/stats.svg';
import { Control, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { numbersOnly } from '../../utils/masks';
import { InputNumbers } from '../InputFields/InputNumbers';
import { AtributteFieldCreate } from './AtributteField';
import { OptionAttribute } from './AtributteField/types/OptionAttribute';

interface IProps {
  breakHD: boolean;
  breakIn700: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
  attributes: OptionAttribute[] | undefined;
  setAttributes: React.Dispatch<React.SetStateAction<OptionAttribute[] | undefined>>;
}
//que tal ao invez de remover da lista colocar um parametro que se caso o valor da proprieda não esteja nula ele não aparece, caso ele selecione coloque o nome do campo
//e caso o valor novo é diferente do velho e tem o nome do field o field antigo vira null

export const StatsLayout = ({ breakHD, breakIn700, register, errors, control, attributes, setAttributes }: IProps) => {
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

  useEffect(() => {
    console.log(attributes);
  }, []);

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
      {attributes && (
        <>
          <Stack flexDirection={breakIn700 ? 'column' : 'row'} gap={3} rowGap={4} mt={6} alignItems={'center'}>
            <Box position={'relative'}>
              <AtributteFieldCreate
                arrayOfOptions={attributes}
                fieldName='cha'
                setArray={setAttributes}
                style={defaultStyle}
              />
              <AtributteFieldCreate
                arrayOfOptions={attributes}
                fieldName='wis'
                setArray={setAttributes}
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
                arrayOfOptions={attributes}
                fieldName='dex'
                setArray={setAttributes}
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
                arrayOfOptions={attributes}
                fieldName='con'
                setArray={setAttributes}
                style={{
                  ...defaultStyle,
                  ...{
                    top: '63%;',
                    left: '75%',
                  },
                }}
              />

              <AtributteFieldCreate
                arrayOfOptions={attributes}
                fieldName='str'
                setArray={setAttributes}
                style={{
                  ...defaultStyle,
                  ...{
                    top: '20%;',
                    left: '38.5%',
                  },
                }}
              />

              <AtributteFieldCreate
                arrayOfOptions={attributes}
                fieldName='int'
                setArray={setAttributes}
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
              <TextField size='small' {...register('HitPoints')} autoComplete='off' label='HP' variant='outlined' />
              <TextField size='small' {...register('ManaPoints')} autoComplete='off' label='MP' variant='outlined' />
              <TextField size='small' {...register('Defense')} autoComplete='off' label='DEF' variant='outlined' />
              <Stack>
                <Typography fontSize={14}> Level: 2</Typography>
                <Typography fontSize={14}> Atributos Disponiveis: 2</Typography>
                <Typography fontSize={14}> Pericias Disponiveis: 2</Typography>
              </Stack>
            </Stack>
          </Stack>
        </>
      )}
    </Box>
  );
};
