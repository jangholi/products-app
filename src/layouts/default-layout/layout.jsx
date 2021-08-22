import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './header';
import useStyles from './style';

function defaultLayout({ children }) {
  const classes = useStyles();

  return (
    <Grid container>
      <Header />
      <Grid className={classes.layout}>
        {children}
      </Grid>
    </Grid>
  );
}

export default defaultLayout;
