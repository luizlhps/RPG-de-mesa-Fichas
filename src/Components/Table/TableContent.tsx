import { Box, Stack, Table, TableBody, TableCell, TableRow, useTheme } from '@mui/material';
import React from 'react';

export const TableContent = ({
  rows,
  secondField,
  field,
}: {
  rows: any;
  field: string;
  secondField?: string;
}) => {
  const theme = useTheme();

  return (
    <Box
      style={{
        overflow: 'auto',
        height: '434px',
        border: '1px solid',
        borderColor: theme.palette.secondary.main,
      }}
    >
      <Table style={{ tableLayout: 'fixed' }}>
        <TableBody>
          {rows.map((row: any) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right' padding='none'>
                <Stack flexDirection={'row'} gap={2} justifyContent={'flex-end'} marginRight={2}>
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={30}
                    height={30}
                    borderRadius={1}
                    border={`1px solid ${theme.palette.secondary.main}`}
                  >
                    {row[field]}
                  </Box>
                  {secondField && (
                    <>
                      <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        width={30}
                        height={30}
                        borderRadius={1}
                        border={`1px solid ${theme.palette.secondary.main}`}
                      >
                        {row[secondField]}
                      </Box>
                    </>
                  )}
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
