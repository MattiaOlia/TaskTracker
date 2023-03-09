import { blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    color: 'blue',
    fontWeight: 400,
    h1: {
    
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: '3rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
        lineHeight: '3.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '4rem',
        lineHeight: '4.5rem',
      },
    },
    h2: {
      margin:"0.3em 0",
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
        lineHeight: '2.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
        lineHeight: '2.5rem',
      },
    },
    h3: {
      margin:"0.3em 0",
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '1.7rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
        lineHeight: '2rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.5rem',
        lineHeight: '2rem',
      },
    },

    body1: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1rem',
        lineHeight: '1.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '1.25rem',
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
      main: '#0316C2',
      contrastText: '#FCFBFF',
    },
  },
});

export default theme;