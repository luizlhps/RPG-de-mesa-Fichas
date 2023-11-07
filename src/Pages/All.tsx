import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { DataGridLayout } from '../Components/DataGrid/Datagrid';
import { Columns, rows } from '../Components/DataGrid/columns/Column';

const All = () => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  const columnConfig = Columns()

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography fontWeight={500} variant='h1' width={small ? '90%' : 400} mt={2}>
          Todas as fichas
        </Typography>
      </Box>
      <Button size='large' sx={{ width: 120, height: 36 }} variant='contained'>
        Novo
      </Button>
      <DataGridLayout
        PageSize={10}
        columns={columnConfig}
        currentPage={1}
        loading={false}
        page={1}
        rows={rows}
        totalCount={100}
        setCurrentPage={()=>(console.log())}
        disableRowSelectionOnClick
      />
    </>
  );
};

export default All;
