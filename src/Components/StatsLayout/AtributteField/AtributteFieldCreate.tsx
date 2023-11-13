import { Autocomplete, Box, Skeleton } from '@mui/material';
import React, { useState } from 'react';
import { OptionAttribute } from './types/OptionAttribute';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface IProps {
  fieldName: 'str' | 'dex' | 'wis' | 'cha' | 'int' | 'con';
  setArray: React.Dispatch<any>;
  style: any;
  control: Control<FieldValues, any>;
  name: string;
  defaultValue?: any;
  options: OptionAttribute[];
  rules: any;
}

export const AtributteFieldCreate = ({
  options,
  fieldName,
  style,
  setArray,
  control,
  defaultValue,
  rules,
  name,
}: IProps) => {
  const [value, setValue] = useState<any>(null);
  return (
    <>
      {options ? (
        <Controller
          name={name}
          defaultValue={defaultValue ?? null}
          control={control}
          rules={rules}
          render={({ field }) => (
            <Autocomplete
              defaultValue={'0'}
              disablePortal
              value={value || null}
              onChange={(e, value: any) => {
                //o valor que pegar no value preciso colocar0 no fieldcurrent o nome do campo que estou
                field.onChange(value.value);
                if (!value) return value;
                const newValue = options.map((item) => {
                  if (typeof value !== 'string' && 'id' in value) {
                    if (fieldName === item.fieldCurrent && item.id !== value.id) return { ...item, fieldCurrent: null };
                    if (item.id === value.id) return { ...item, fieldCurrent: fieldName };
                  }
                  return item;
                });

                setArray(newValue);

                setValue(value);
              }}
              options={options.filter(
                (item) => item.fieldCurrent === null || item.fieldCurrent === fieldName || item.value === 0
              )}
              renderOption={(props, option) => (
                <Box component='li' {...props} key={option.id}>
                  {option.value.toString()}
                </Box>
              )}
              isOptionEqualToValue={(option, value) => option.id === value.id}
              getOptionLabel={(option) => option.value.toString()} // Use o valor numérico como rótulo
              sx={style}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input type='text' {...params.inputProps} />
                </div>
              )}
            />
          )}
        />
      ) : (
        <Skeleton variant='rectangular' width={210} height={60} />
      )}
    </>
  );
};
