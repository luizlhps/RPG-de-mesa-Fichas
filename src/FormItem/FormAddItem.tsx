import { Autocomplete, Box, Button, Divider, Skeleton, Stack, TextField, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ComboBox } from '../Components/ComboBox';
import { Api } from '../services/axiosConfig';
import { Control, Controller, FieldValues, useForm } from 'react-hook-form';

interface IProps {
  handleClose: () => void;
  handleOpenCreate: () => void;
}

type ItemInfo = {
  name: string;
  type: number;
  value: number;
  keyAttribute: null | string;
  damage: null | number;
  armor: null | string;
  roll: number;
  description: string;
};

type ItemType = {
  id: number;
  name: string;
  info: ItemInfo;
};

export const FormAddItem = ({ handleClose, handleOpenCreate }: IProps) => {
  const {
    formState: { errors },
    register,
    setValue,
    control,
    watch,
  } = useForm();

  const theme = useTheme();
  const [options, setOptions] = useState<any>();
  const [selectedItem, setSelectedITem] = useState<ItemType | undefined>();

  async function fetchApi() {
    const res = await Api.get('./item/list');

    if (res.status !== 200) return;

    setOptions(res.data);
  }

  console.log(selectedItem);

  const checkTypeOfSelectedItem = (selected: ItemType) => {
    if (!selected) return;
    if (selected?.info?.damage !== null) return selected.info.damage;
    if (selected?.info?.armor !== null) return selected?.info?.armor;
    if (selected?.info?.roll !== null) return selected?.info?.roll;
  };

  useEffect(() => {
    if (!selectedItem) return;
    setValue('value', checkTypeOfSelectedItem(selectedItem));
    setValue('type', selectedItem?.info?.type);
    setValue('description', selectedItem?.info?.description);
  }, [selectedItem]);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Box minHeight={700}>
      <Box width={'100%'} padding={5}>
        <Typography variant='h2'>Adicionar Item</Typography>
      </Box>
      <Divider sx={{ background: theme.palette.grey[800] }} />
      <Box padding={5} display={'flex'} flexDirection={'column'} minHeight={192}>
        <Button
          onClick={handleOpenCreate}
          size='small'
          sx={{ height: 40, width: 150, fontSize: 14, alignSelf: 'flex-end', marginBottom: 2 }}
          variant='contained'
        >
          Criar
        </Button>
        {options ? (
          <Controller
            name={'name'}
            defaultValue={null}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Autocomplete
                {...field}
                disableClearable
                disablePortal
                options={options}
                value={
                  field.value
                    ? options.find((item: any) => {
                        return field.value === item.id;
                      }) ?? null
                    : null
                }
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField variant='outlined' {...params} label={'Selecione o Item'} />}
                renderOption={(props, option) => (
                  <Box component='li' {...props} key={option.id}>
                    {option.name}
                  </Box>
                )}
                onChange={(event, newValue) => {
                  field.onChange(newValue ? newValue.id : null);
                  setSelectedITem(newValue);
                }}
              />
            )}
          />
        ) : (
          <Skeleton variant='rectangular' width={210} height={60} />
        )}
      </Box>

      <Divider sx={{ background: theme.palette.grey[800] }} />

      <Box padding={5} display={'flex'} flexDirection={'column'} rowGap={4}>
        <Stack rowGap={4} flexDirection={'row'} gap={4}>
          <Controller
            name={'value'}
            defaultValue={''}
            control={control}
            render={({ field }) => (
              <TextField
                disabled
                value={field.value}
                autoComplete='off'
                fullWidth
                label='DMG/AMOR'
                variant='outlined'
              />
            )}
          ></Controller>

          <Controller
            name={'type'}
            defaultValue={''}
            control={control}
            render={({ field }) => (
              <TextField disabled value={field.value} autoComplete='off' fullWidth label='Tipo' variant='outlined' />
            )}
          ></Controller>
        </Stack>

        <Controller
            name={'description'}
            defaultValue={''}
            control={control}
            render={({ field }) => (
              <TextField multiline value={field.value} rows={5} autoComplete='off' fullWidth label='Descrição' variant='outlined' />

            )}
          ></Controller>
      </Box>
      <Stack
        flexDirection={'row'}
        justifyContent={'center'}
        padding={2}
        alignItems={'center'}
        gap={1}
        minHeight={50}
        width={'100%'}
        borderTop={1}
        borderColor={theme.palette.grey[800]}
      >
        <Button onClick={handleClose} size='small' sx={{ height: 40, width: 150, fontSize: 14 }} variant='contained'>
          Sair
        </Button>
        <Button onClick={handleClose} size='small' sx={{ height: 40, width: 150, fontSize: 14 }} variant='contained'>
          Salvar
        </Button>
      </Stack>
    </Box>
  );
};
