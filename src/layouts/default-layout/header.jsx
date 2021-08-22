import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';

function Header() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.header}
    >
      <Grid item md={12}>
        <Typography variant="h5" component="h1">
          Products application
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Header;
