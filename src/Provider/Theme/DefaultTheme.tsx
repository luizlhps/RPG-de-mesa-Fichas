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
    text: {
      primary: '#fff',
    },
    background: {
      default: '#050D13',
      paper: '#121415',
    },
    primary: {
      main: '#050D13',
      light: '#242526'
    },
    secondary: {
      main: '#FF9900',
    },
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            borderColor: '#110e08',
          },
        },
      },
    },

    MuiSvgIcon:{
      styleOverrides:{
        root:{
          fill:'white'
        }
      }
    },

    MuiIconButton:{
      styleOverrides:{
        root:{
          ":active":{
            background: '#FF9900'
          },
           ":hover":{
            background: '#FF9900'
          } 
        }
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          input: {
            color: '#FF9900',
          },
          '& .MuiInputBase-input-MuiOutlinedInput-input': {
            background: 'red'
          },
          '& label.Mui-focused': {
            color: '#FF9900',
          },
          '& label': {
            color: '#FF9900',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#FF9900',
            },
            '&:hover fieldset': {
              borderColor: '#ffa621',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#ffa621',
            },
          },
        },
      },
    },
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
        },
        "input::-webkit-inner-spin-button": {
          "WebkitAppearance": "none",
          "margin": 0,
        },
        "input[type=number]": {
          "MozAppearance": "textfield",
        },
        a: {
          color: '#fff',
          textDecoration: 'none',
          ':hover': { color: '#FF9900' },
        },
        minHeight: '100vh',
        '@media (max-width: 1320px)': {
          body: {
            backgroundSize: 'cover',
          },
        },
        '@media (max-width: 768px)': {
          body: {
            background: `url(${background}) 74% 68%/cover no-repeat fixed, #050D13`,
          },
        },
      }),
    },
    
  },
});
