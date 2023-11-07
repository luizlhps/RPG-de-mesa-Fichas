import { createTheme } from '@mui/material/styles';
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
    text:{
      primary: '#fff',
    },
    background: {
      default: '#050D13',
      paper: '#121415',
    },
    primary: {
      main: '#050D13',
    },
    secondary: {
      main: '#FF9900',
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
          background: `url(${background}) 100% 68%/cover no-repeat fixed, #050D13`,
          backgroundSize: 'contain',

          a:{
            color: '#fff',
            textDecoration: 'none', 
            ':hover': { color: '#FF9900' }
          },
          minHeight: '100vh',
          '@media (max-width: 1320px)': {
            backgroundSize: 'cover',
          },

          '@media (max-width: 768px)': {
            background: `url(${background}) 74% 68%/cover no-repeat fixed, #050D13`,
          },
        },
      }),
    },
  },
});