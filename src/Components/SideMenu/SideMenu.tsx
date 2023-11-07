import { ReactNode, useCallback, useEffect, useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  MenuItem,
  MenuList,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import solarPunk from '../../assets/images/solarPunk.svg';
import { Link, useNavigate } from 'react-router-dom';

export const SideMenu = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm'));

  // Menu
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleMenuOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, small]);

  const handleMenuClose = useCallback(() => {
    setIsOpen(false);
  }, [isOpen, small]);

  useEffect(() => {
    if (small === false) {
      setIsOpen(false);
    }
  }, [small]);

  const DrawerHeader = styled('div')(({ theme }) => ({
    position: 'relative',
    display: small ? 'flex' : 'none',
    height: '60px',
    justifyContent: 'flex-start',

    '.menu': {
      position: 'fixed',
      width: '70px',
      height: '40px',
      top: '10px',
      left: '10px',
      right: 0,
      zIndex: 2,
    },
  }));

  function handleRedirect(route: string) {
    navigate(`${route}`);
    handleMenuClose();
  }

  return (
    <>
      <Box minHeight={'100vh'}>
        <DrawerHeader>
          <Box
            width={'100%'}
            height={60}
            sx={{ background: theme.palette.background.paper, position: 'fixed', zIndex: 2 }}
          ></Box>

          <div className='menu'>
            <IconButton onClick={handleMenuOpen}>
              <MenuIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
          </div>
        </DrawerHeader>

        <Drawer
          onClose={handleMenuClose}
          sx={{
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: small ? '100%' : '300px',
            },
          }}
          anchor='left'
          open={isOpen}
        >
          <DrawerHeader>
            <IconButton onClick={handleMenuClose}>
              <MenuIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
          </DrawerHeader>

          <MenuList>
            <MenuItem onClick={() => handleRedirect('/')} sx={{ display: 'flex', justifyContent: 'center' }}>
              Home
            </MenuItem>
          </MenuList>

          <MenuList>
            <MenuItem onClick={() => handleRedirect('/all')} sx={{ display: 'flex', justifyContent: 'center' }}>
              Todas as fichas
            </MenuItem>
          </MenuList>
        </Drawer>

        <Box padding={!small ? theme.spacing(7, 10) : theme.spacing(4, 3)} paddingBottom={0}>
          <Box justifyContent={`space-between`} alignItems={'center'} display={'flex'} paddingBottom={2}>
            <Box sx={{ cursor: 'pointer' }}>
              <img width={small ? '250px' : 'none'} src={solarPunk} alt='' />
            </Box>
            <Stack flexDirection={`row`} gap={4} display={small ? 'none' : 'flex'}>
              <Link to={'/'}> Home</Link>
              <Link to={'/all'}>Ver Todos</Link>
            </Stack>
          </Box>
          {children}
        </Box>
      </Box>
    </>
  );
};
