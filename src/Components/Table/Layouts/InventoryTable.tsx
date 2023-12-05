import { Box, Button, Divider, IconButton, Stack, TextField, Typography, useTheme } from '@mui/material';
import { TableComponent } from '..';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import AddIcon from '@mui/icons-material/Add';
import { BasicModal } from '../../Modal';
import { useState } from 'react';
import { FormAddItem } from '../../../FormItem';
import { Control, FieldValues } from 'react-hook-form';

interface IAbility {
  rows: any;
  control: Control<FieldValues, any>;
}

export const InventoryTable = ({ rows, control }: IAbility) => {
  const [open, setOpen] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [items, setItems] = useState();

  const theme = useTheme();

  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModalCreate = () => {
    setOpenCreate(false);
  };
  const handleOpenModalCreate = () => {
    setOpenCreate(true);
  };

  return (
    <>
      {/* add */}
      <BasicModal handleClose={handleCloseModal} open={open} maxWidth={650}>
        <FormAddItem handleClose={handleCloseModal} handleOpenCreate={handleOpenModalCreate} />
      </BasicModal>

      {/* create */}
      <BasicModal handleClose={handleCloseModalCreate} open={openCreate} maxWidth={650}>
        <Box minHeight={700}>
          <Box width={'100%'} padding={5}>
            <Typography variant='h2' paddingTop={1}>
              Criar Item
            </Typography>
          </Box>
          <Divider sx={{ background: theme.palette.grey[800] }} />
          <Box padding={5} display={'flex'} flexDirection={'column'} minHeight={192}>
            <TextField autoComplete='off' fullWidth label='Selecione um Item' variant='outlined' />
          </Box>

          <Divider sx={{ background: theme.palette.grey[800] }} />

          <Box padding={5} display={'flex'} flexDirection={'column'} rowGap={4}>
            <Stack rowGap={4} flexDirection={'row'} gap={4}>
              <TextField autoComplete='off' fullWidth label='DMG/AMOR' variant='outlined' />
              <TextField autoComplete='off' fullWidth label='Tipo' variant='outlined' />
            </Stack>
            <TextField multiline rows={5} autoComplete='off' fullWidth label='Descrição' variant='outlined' />
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
              onClick={handleCloseModalCreate}
              size='small'
              sx={{ height: 40, width: 150, fontSize: 14 }}
              variant='contained'
            >
              Voltar
            </Button>
            <Button
              onClick={handleCloseModalCreate}
              size='small'
              sx={{ height: 40, width: 150, fontSize: 14 }}
              variant='contained'
            >
              Salvar
            </Button>
          </Stack>
        </Box>
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
