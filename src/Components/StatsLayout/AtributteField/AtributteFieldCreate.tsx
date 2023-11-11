import { Autocomplete, Box } from '@mui/material';
import React, { useState } from 'react';
import { OptionAttribute } from './types/OptionAttribute';

interface IProps {
  arrayOfOptions: OptionAttribute[];
  fieldName: "str" | "dex" | "wis" | "cha" | "int" | "con"
  style: any;
  setArray: React.Dispatch<any>;
}

export const AtributteFieldCreate = ({ arrayOfOptions, fieldName, style, setArray }: IProps) => {
  const [value, setValue] = useState<any>(null);
  return (
    <Autocomplete
      defaultValue={'0'}
      disablePortal
      value={value || null}
      onChange={(e, value: OptionAttribute | null | string) => {
        //o valor que pegar no value preciso colocar0 no fieldcurrent o nome do campo que estou
        console.log(value);
        if (!value) return value;
        const newValue = arrayOfOptions.map((item) => {
          if (typeof value !== 'string' && 'id' in value) {
            if (fieldName === item.fieldCurrent && item.id !== value.id) return { ...item, fieldCurrent: null };
            if (item.id === value.id) return { ...item, fieldCurrent: fieldName };
          }
          return item;
        });

        setArray(newValue);

        setValue(value);
      }}
      options={arrayOfOptions.filter((item) => item.fieldCurrent === null || item.fieldCurrent === fieldName || item.value === 0)}
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
  );
};
