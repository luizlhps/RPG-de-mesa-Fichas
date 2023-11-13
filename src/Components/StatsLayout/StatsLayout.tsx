import { Box, Button, Stack, TextField, Typography, useTheme } from '@mui/material';
import React from 'react';
import Stats from '../../assets/images/stats.svg';
import { Control, FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { AtributteFieldCreate } from './AtributteField';
import { OptionAttribute } from './AtributteField/types/OptionAttribute';
import { ComboBox } from '../ComboBox';
import { IClasses } from '../../services/types';

interface IProps {
  breakHD: boolean;
  breakIn700: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>;
  attributes: OptionAttribute[] | undefined;
  setAttributes: React.Dispatch<React.SetStateAction<OptionAttribute[] | undefined>>;
  classes: IClasses[] | undefined;
}

export const StatsLayout = ({
  breakHD,
  breakIn700,
  register,
  errors,
  control,
  attributes,
  setAttributes,
  classes,
}: IProps) => {
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

  return (
    <Box flex={1}>
      <Stack flexDirection={breakHD ? 'column' : 'row'} direction='row' gap={2} rowGap={2}>
        <TextField {...register('Name', {required: true})} autoComplete='off' fullWidth label='Nome do Personagem' variant='outlined' />
        <TextField {...register('Height', {required: true})} autoComplete='off' label='Altura' variant='outlined' type='number' />
      </Stack>
      <Stack flexDirection={breakHD ? 'column' : 'row'} mt={2} direction='row' gap={2} rowGap={2}>
        <ComboBox
          control={control}
          defaultValue={null}
          nameField='Classes'
          options={classes}
          property='name'
          rules={{}}
          style={{ width: '100%' }}
        />

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
                control={control}
                rules={{ require: true }}
                defaultValue={null}
                name='attributes.CHA'
                options={attributes}
                fieldName='cha'
                setArray={setAttributes}
                style={defaultStyle}
              />
              <AtributteFieldCreate
                control={control}
                rules={{ require: true }}
                defaultValue={null}
                name='attributes.WIS'
                options={attributes}
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
                control={control}
                rules={{ require: true }}
                defaultValue={null}
                name='attributes.DEX'
                options={attributes}
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
                control={control}
                rules={{ require: true }}
                defaultValue={null}
                name='attributes.CON'
                options={attributes}
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
                control={control}
                rules={{ require: true }}
                defaultValue={null}
                name='attributes.STR'
                options={attributes}
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
                control={control}
                rules={{ require: true }}
                defaultValue={null}
                name='attributes.INT'
                options={attributes}
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