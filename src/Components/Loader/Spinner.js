import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core' ;


function Spinner() {
  return (
    <Grid container justify="center" direction="column" alignItems="center">
        <CircularProgress disableShrink />
    </Grid>
  );
}

export default Spinner;