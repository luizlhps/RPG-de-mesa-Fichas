import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ReactNode } from 'react';



interface IProps {
  open: boolean;
  handleClose: () => void;
  children: ReactNode
  maxWidth?: number | string
}

export const BasicModal = ({ open, handleClose, children, maxWidth }: IProps) => {

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: maxWidth ?? 400,
    width: `90%`,
    bgcolor: 'background.paper',
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
    {children}
      </Box>
    </Modal>
  );
};
