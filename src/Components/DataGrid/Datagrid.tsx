import React, { memo, useEffect } from 'react';

//Material Ui
import { Box, useTheme } from '@mui/material';
import { DataGrid, useGridApiContext, useGridApiRef } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import Pagination from '@mui/material/Pagination';
//interface

interface PropsDataGrid {
  rows: any;
  columns: any;
  PageSize: number;
  totalCount: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  page: number;
  loading: boolean;
  disableRowSelectionOnClick?: boolean;
}
interface PropsCustomPagination {
  PageSize: number;
  totalCount: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  page: number;
}

//Config Pagination
export function CustomPagination({ totalCount, PageSize, currentPage, setCurrentPage, page }: PropsCustomPagination) {
  const pageTotalCount = totalCount / PageSize;

  return (
    <Pagination
      disabled={Math.ceil(pageTotalCount) === 1 ? true : false}
      color='primary'
      count={Math.ceil(pageTotalCount)}
      page={page !== currentPage + 1 ? page : currentPage + 1}
      onChange={(event, value) => {
        setCurrentPage(value - 1);
      }}
    />
  );
}

function CustomLoadingOverlay() {
  return <LinearProgress color='secondary' />;
}

//Code
export const DataGridLayout: React.FC<PropsDataGrid> = ({
  rows,
  columns,
  PageSize,
  page,
  totalCount,
  setCurrentPage,
  currentPage,
  loading,
}) => {
  const theme = useTheme();
  return (
    <Box sx={{ width: '100%', marginTop: 3 }}>
      <DataGrid
        disableColumnFilter
        disableColumnMenu
        disableVirtualization
        disableRowSelectionOnClick
        disableColumnSelector
        disableDensitySelector
        loading={loading}
        autoHeight={true}
        sx={{
          '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
            outline: 'none !important',
          },

          '&.MuiDataGrid-root': {
            borderColor: '#191919',
            backgroundColor: "#121415",
          },
          '&.MuiDataGrid-root .MuiDataGrid-withBorderColor': {
            borderColor: '#191919',
          },
        }}
        rows={rows ? rows : []}
        slots={{
          pagination: () => (
            <CustomPagination
              totalCount={totalCount}
              PageSize={PageSize}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              page={page}
            />
          ),
          loadingOverlay: CustomLoadingOverlay,
        }}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: PageSize } },
          sorting: {
            sortModel: [{ field: 'id', sort: 'desc' }],
          },
        }}
        pageSizeOptions={[PageSize]}
      />
    </Box>
  );
};
