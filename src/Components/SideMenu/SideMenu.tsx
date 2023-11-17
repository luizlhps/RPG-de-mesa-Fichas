import { ReactNode, useCallback, useEffect, useState } from 'react';
import { Box, Drawer, IconButton, MenuItem, MenuList, Stack, styled, useMediaQuery, useTheme } from '@mui/material';
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
      <Box height={'100%'}>
        <DrawerHeader>
          <Box
            width={'100%'}
            height={60}
            sx={{ background: theme.palette.background.paper, position: 'fixed', zIndex: 2 }}
          ></Box>

          <Box className='menu' display={'flex'}>
            <IconButton onClick={handleMenuOpen}>
              <MenuIcon sx={{ color: theme.palette.text.primary }} />
            </IconButton>
            <img width={'150px'} src={solarPunk} alt='' />
          </Box>
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
          <DrawerHeader
            sx={{
              width: 40,
              top: '10px',
              left: '10px',
            }}
          >
            <IconButton sx={{ width: 40, height: 40 }} onClick={handleMenuClose}>
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

        <Box height={'calc(100% - 65px)'}>
          <Box
            justifyContent={`space-between`}
            alignItems={'center'}
            display={'flex'}
            position={'absolute'}
            width={'100%'}
            padding={`0 ${theme.spacing(3)}`}
          >
            <Box
              display={'flex'}
              alignItems={`center`}
              height={64}
              sx={{ cursor: 'pointer', display: small ? 'none' : 'flex' }}
              onClick={() => handleRedirect('/')}
            >
              <img width={'180px'} src={solarPunk} alt='' />
            </Box>
            <Stack flexDirection={`row`} gap={4} display={small ? 'none' : 'flex'}>
              <Link to={'/'}> Home</Link>
              <Link to={'/all'}>Ver Todos</Link>
            </Stack>
          </Box>
          <Box height={'100% '} padding={`0 ${theme.spacing(3)}`} paddingTop={'64px'}>
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};
