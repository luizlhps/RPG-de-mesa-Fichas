import { IconButton, useTheme } from '@mui/material';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
export const Columns = () => {
  const theme = useTheme();

  const columnsConfig: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100, align: "center",  headerAlign: "center", sortable: false},
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      flex: 1,
      minWidth: 200,
      headerAlign: "left",
      align: "left",
      sortable: false
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      flex: 1,
      minWidth: 200,
      headerAlign: "left",
      align: "left",
      sortable: false
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      flex: 1,
      minWidth: 200,
      headerAlign: "left",
      align: "left",
      sortable: false
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      flex: 1,
      minWidth: 200,
      headerAlign: "left",
      align: "left",
      sortable: false,
      valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },

    {
      field: 'actions',
      headerName: 'Status',
      description: 'Ações',
      minWidth: 100,
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: (params) => {
        return (
          <div
            style={{
              color: theme.palette.text.primary,
              justifyContent: 'center',
              alignItems: 'center',
              verticalAlign: 'right',
            }}
          >
            <IconButton
              onClick={() => {
              }}
            >
              <RemoveRedEyeIcon sx={{color: theme.palette.text.primary}}/>
            </IconButton>

          </div>
        );
      },
    },
  ];
  return columnsConfig;
};

export const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
