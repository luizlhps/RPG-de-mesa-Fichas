import { Box, Button, Stack, useTheme } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { FieldValues, UseFormHandleSubmit } from 'react-hook-form';
interface IProps {
  handlePreviousForm: () => void;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
  handleContinueForm: () => void;
  slideIndex: number;
  onSubmit: any;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
}

export const Stepper = ({
  handlePreviousForm,
  setSlideIndex,
  handleContinueForm,
  handleSubmit,
  onSubmit,
  slideIndex,
}: IProps) => {
  const theme = useTheme();
  return (
    <Stack flexDirection={'row'} rowGap={2} gap={2} justifyContent={'center'} flexWrap={'wrap'} mb={7}>
      <Box display={'flex'} gap={2} flex={1} alignItems={'center'} justifyContent={'center'}>
        <ArrowBackIcon
          onClick={() => handlePreviousForm()}
          sx={{ cursor: 'pointer', ':hover': { fill: theme.palette.secondary.main } }}
        />
        <Button
          variant='contained'
          fullWidth
          onClick={() => setSlideIndex(0)}
          sx={{
            maxWidth: 140,
            height: 24,
            background: slideIndex === 1 ? theme.palette.primary.light : theme.palette.secondary.main,
          }}
        ></Button>

        {/*create Or save Sheet */}
        <CreateNewFolderIcon
          onClick={handleSubmit(onSubmit)}
          sx={{ cursor: 'pointer', ':hover': { fill: theme.palette.secondary.main } }}
        />

        <Button
          variant='contained'
          fullWidth
          onClick={() => setSlideIndex(1)}
          sx={{
            maxWidth: 140,
            height: 24,
            background: slideIndex === 0 ? theme.palette.primary.light : theme.palette.secondary.main,
          }}
        ></Button>
        <ArrowForwardIcon
          onClick={() => handleContinueForm()}
          sx={{ cursor: 'pointer', ':hover': { fill: theme.palette.secondary.main } }}
        />
      </Box>
    </Stack>
  );
};
