import { Box, Button, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { TableComponent } from '..';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AddIcon from '@mui/icons-material/Add';
import { BasicModal } from '../../Modal';
import { useState } from 'react';

interface IAbility {
  rows: any;
}

export const InventoryTable = ({ rows }: IAbility) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };

  return (
    <>
      <BasicModal handleClose={handleCloseModal} open={open} maxWidth={650}>
        <Box minHeight={50} width={'100%'} padding={'12px'}>
          {/*   <Typography variant='h2' paddingTop={1}>História do personagem</Typography> */}
        </Box>

        <Stack
          flexDirection={'row'}
          justifyContent={'center'}
          padding={2}
          alignItems={'center'}
          gap={1}
          minHeight={50}
          width={'100%'}
          borderTop={1}
          borderColor={theme.palette.grey[800]}
        >
          <Button
            onClick={handleCloseModal}
            size='small'
            sx={{ height: 40, width: 150, fontSize: 14 }}
            variant='contained'
          >
            Sair
          </Button>
        </Stack>
      </BasicModal>

      <TableComponent.Root>
        <TableComponent.Header
          field='INVENTÁRIO'
          customSecondField={
            <IconButton onClick={handleOpenModal}>
              <AddIcon sx={{ fill: theme.palette.background.default }} />
            </IconButton>
          }
        />
        <TableComponent.ContentCustom rows={rows} rowField='name' height={432}>
          <AccessibleForwardIcon onClick={() => console.log('oi')}></AccessibleForwardIcon>
        </TableComponent.ContentCustom>
        <TableComponent.Footer />
      </TableComponent.Root>
    </>
  );
};
