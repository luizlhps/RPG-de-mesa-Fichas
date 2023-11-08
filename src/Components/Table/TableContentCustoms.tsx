import { Box, Stack, Table, TableBody, TableCell, TableRow, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';

export const TableContentCustom = ({
  rows,
  children,
  rowField,
  height
}: {
  rows: any;
  rowField: string;
  height?:number
  withoutBox?: boolean;
  children: ReactNode;
}) => {
  const theme = useTheme();

  return (
    <Box
      style={{
        overflow: 'auto',
        height: height ? height:'434px',
        border: '1px solid',
        borderColor: theme.palette.secondary.main,
      }}
    >
      <Table style={{ tableLayout: 'fixed' }}>
        <TableBody>
          {rows.map((row: any, index: any) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row[rowField]}
              </TableCell>
              <TableCell align='right' padding='none'>
                <Stack flexDirection={'row'} gap={2} justifyContent={'flex-end'} marginRight={2}>
                  {React.Children.map(children, (child, index) => (
                    <>{child}</>
                  ))}
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
