import { Box, Button, Stack, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { BasicModal } from '../Modal';
import { QuillEditor } from '../QuillEditor/QuillEditor';

export const HistoryForm = () => {
  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();

  const [historyText, setHistoryText] = useState(
    '<h1 class="ql-align-center">Escreva sua historia</h1> <br/> <p>Desenvolva um contexto mais amplo para a narrativa.</p>'
  );

  return (
    <>
      <Box position={'relative'}></Box>
      <Button
        fullWidth
        variant='contained'
        onClick={handleOpen}
        sx={{ color: theme.palette.background.default, flex: 1, fontWeight: 600, height: 45 }}
      >
        historia
      </Button>
      <BasicModal maxWidth={690} handleClose={handleClose} open={open}>
        <Box minHeight={50} width={'100%'} padding={'12px'}>
          {/*   <Typography variant='h2' paddingTop={1}>História do personagem</Typography> */}
        </Box>

        <QuillEditor height={'399px'} text={historyText} onChange={setHistoryText}></QuillEditor>
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
          <Button onClick={handleClose} size='small' sx={{ height: 40, width:150, fontSize: 14 }} variant='contained'>
            Sair
          </Button>
        </Stack>
      </BasicModal>
    </>
  );
};
