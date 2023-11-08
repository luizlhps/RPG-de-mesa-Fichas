import { Box, Table, useTheme } from '@mui/material';
import React from 'react';

export const TableFooter = () => {
  const theme = useTheme();

  return (
    <Box
      style={{
        height: '40px',
        border: '1px solid',
        borderRadius: '0% 0% 4px 4px ',
        borderColor: theme.palette.secondary.main,
      }}
    >
      <Table></Table>
    </Box>
  );
};
