import { Autocomplete, Box, Skeleton, TextField } from '@mui/material';
import React from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface IProps {
  style: any;
  control: Control<FieldValues, any>;
  nameField: string;
  defaultValue?: any;
  options: any;
  property: string;
  rules: any;
}

export const ComboBox = ({ options, control, defaultValue, rules, nameField, style, property }: IProps) => {
  return (
    <>
      {options ? (
        <Controller
          name={nameField}
          defaultValue={defaultValue ?? null}
          control={control}
          rules={rules}
          render={({ field }) => (
            <Autocomplete
              {...field}
              disableClearable
              disablePortal
              options={options}
              sx={style}
              value={
                field.value
                  ? options.find((item: any) => {
                      return field.value === item.id;
                    }) ?? null
                  : null
              }
              getOptionLabel={(option) => option[property]}
              renderInput={(params) => <TextField variant='outlined' {...params} label='Movie' />}
              renderOption={(props, option) => (
                <Box component='li' {...props} key={option.id}>
                  {option[property]}
                </Box>
              )}
              onChange={(event, newValue) => {
                field.onChange(newValue ? newValue.id : null);
              }}
            />
          )}
        />
      ) : (
        <Skeleton variant='rectangular' width={210} height={60} />
      )}
    </>
  );
};
