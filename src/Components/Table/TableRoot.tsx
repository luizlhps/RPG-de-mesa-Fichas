import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const TableRoot = ({ children }: IProps) => {
  return (
    <>
      <Box minWidth={280}>{children}</Box>
    </>
  );
};
