import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4D1921',
    },
    text: {
      primary: '#404040',
      secondary: '#8D8D8D',
    },
  },
});

const useGlobalStyles = makeStyles({
  '@global': {
    body: {
      margin: 0,
      backgroundColor: 'lightgray',
      fontSize: '16px',
    },
  },
});

function Theme({ children }) {
  useGlobalStyles();
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default Theme;
