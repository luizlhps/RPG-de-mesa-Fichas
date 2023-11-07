import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import background from '../../assets/images/background.png';
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const themeDefault = createTheme({
  typography: {
    h1: {
      fontSize: '48px', // Tamanho de fonte para h1
      fontWeight: '500',
      letterSpacing: '1px',
    },
    h2: {
      fontSize: '24px', // Tamanho de fonte para h2
      fontWeight: '500',
    },
    h3: {
      fontSize: '16px', // Tamanho de fonte para h3
      fontWeight: '500',
    },
    

    /*         fontFamily: [
          "Inter",
          "Poopins",
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
   */
    allVariants: {
      color: 'white',
    },
  },

  status: {
    danger: orange[500],
  },
  palette: {
    background: {
      default: '#050D13',
    },
    primary: {
      main: '#050D13',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '500',
          fontSize: '1rem',
        },
        contained: {
          background: '#FF9900',
          '&:hover': {
            background: '#ffa621',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: {
          background: `url(${background}) 100% 68%/cover no-repeat fixed, #050D13`, // Use a imagem como background
          minHeight: '100vh', // Defina a altura desejada
          '@media (max-width: 768px)': {
            background: `url(${background}) 74% 68%/cover no-repeat fixed, #050D13`, // Imagem e cor de fundo para telas menores
          },
        },
      }),
    },
  },
});
