import { Box, Stack, Table, TableBody, TableCell, TableRow, useTheme } from '@mui/material';
import React from 'react';

export const TableContent = ({
  rows,
  rowsName,
  key,
  secondField,
  field,
  withoutBox,
}: {
  rows: any;
  key?: string
  field: string;
  rowsName: string;
  secondField?: string;
  withoutBox?: boolean;
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
          {rows.map((row: any, index:any) => (
            <TableRow key={key ?? index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row[rowsName]}
              </TableCell>
              <TableCell align='right' padding='none'>
                <Stack flexDirection={'row'} gap={2} justifyContent={'flex-end'} marginRight={2}>
                  <Box
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={30}
                    height={30}
                    borderRadius={withoutBox ? 0 : 1}
                    border={withoutBox ? 'none' : `1px solid ${theme.palette.secondary.main}`}
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
                        borderRadius={withoutBox ? 0 : 1}
                        border={withoutBox ? 'none' : `1px solid ${theme.palette.secondary.main}`}
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
