import { Box, IconButton, Stack, Table, TableBody, TableCell, TableRow, useTheme } from '@mui/material';

type RowType<T extends string | number | symbol> = {
  [key in T]: string | number; // Adjust the type of the values as needed
};

export const TableContent =  <T extends string | number | symbol>({
  rows,
  rowsName,
  key,
  secondField,
  field,
  rowCondition,
  rowFieldCondition,
  fn,
  withoutBox,
}: {
  rows: RowType<T>[];
  key?: keyof RowType<T>;
  field: keyof RowType<T>;
  rowsName: keyof RowType<T>;
  secondField?: keyof RowType<T>;
  withoutBox?: boolean;
  rowCondition: string | number
  rowFieldCondition: keyof RowType<T>
  fn: (selected: any) => void;
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
          {rows.map((row: any, index: any) => (
            <TableRow key={key ?? index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component='th' scope='row'>
                {row[rowsName]}
              </TableCell>
              <TableCell align='right' padding='none'>
                <Stack flexDirection={'row'} gap={2} justifyContent={'flex-end'} marginRight={2}>
                  {row[rowFieldCondition] !== rowCondition && (
                    <IconButton
                      sx={{
                        width: 30,
                        color: theme.palette.text.primary,
                        height: 30,
                      }}
                      onClick={() => fn(row)}
                    >
                      +
                    </IconButton>
                  )}
                  {row[rowFieldCondition] === rowCondition && (
                    <IconButton
                      sx={{
                        width: 30,
                        color: theme.palette.text.primary,
                        height: 30,
                      }}
                      onClick={() => fn(row)}
                    >
                      -
                    </IconButton>
                  )}
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
