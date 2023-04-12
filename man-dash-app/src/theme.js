import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    color: 'blue',
    fontWeight: 400,
    h1: {
    
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '2.2rem',
        lineHeight: '3rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2.5rem',
        lineHeight: '3rem',
      },
    },
    h2: {
      margin:"0.3em 0",
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '2rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
        lineHeight: '2rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.5rem',
        lineHeight: '2rem',
      },
    },
    h3: {
      margin:"0.3em 0",
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1.2rem',
        lineHeight: '2rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.2rem',
        lineHeight: '2rem',
      },
    },

    body1: {
      fontSize: '0.8rem',
      lineHeight: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
    },
  },
  palette: {
    primary: {
      main: '#9854CB',
      contrastText: '#FCFBFF',
    },
    secondary: {
      main: '#FCFBFF',
      contrastText: '#27104E',
    },
    backgroundCol:'#EEF2FA'
  },
  
});

export default theme;