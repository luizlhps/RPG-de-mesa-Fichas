import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from '@mui/material';
import React from 'react';

interface IProps {
  field: string;
  secondField?: string;
  customSecondField?: React.ReactNode 
}

export const TableHeader = ({ field, secondField, customSecondField }: IProps) => {
  const theme = useTheme();
  return (
    <TableContainer
      component={Paper}
      sx={{ border: '1px solid', borderColor: theme.palette.secondary.main, borderRadius: '4px 4px 0% 0%' }}
    >
      <Table sx={{ minWidth: 100 }} aria-label='simple table'>
        <TableHead sx={{ backgroundColor: theme.palette.secondary.main }}>
          <TableRow>
            <TableCell>
              <Typography fontWeight={500} fontSize={14} sx={{ color: theme.palette.background.default }}>
                {field}
              </Typography>
            </TableCell>

            {secondField && (
              <TableCell align='right'>
                <Typography fontWeight={500} fontSize={14} sx={{ color: theme.palette.background.default }}>
                  {secondField}
                </Typography>
              </TableCell>
            )}

            {
              customSecondField && (
                <TableCell align='right'>
                <Typography fontWeight={500} fontSize={14} sx={{ color: theme.palette.background.default }}>
                  {customSecondField}
                </Typography>
              </TableCell>
              )
            }
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};
