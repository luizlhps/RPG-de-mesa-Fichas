import { TextField, useTheme } from '@mui/material';
import React from 'react';
import { numbersOnly } from '../../utils/masks';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface IProps {
  style: any;
  control: Control<FieldValues, any>;
  nameField: string;
}

export const InputNumbers = ({ style, control, nameField }: IProps) => {
  return (
    <Controller
      control={control}
      name={nameField}
      defaultValue={"0"}
      render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
        <TextField
          InputProps={{
            disableUnderline: true,
          }}
          variant='filled'
          value={value}
          onChange={(e) => onChange(numbersOnly(e.target.value))}
          sx={style}
        />
      )}
    />
  );
};
