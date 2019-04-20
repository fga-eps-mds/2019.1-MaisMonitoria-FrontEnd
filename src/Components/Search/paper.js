import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid} from '@material-ui/core' ;

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography component="p">
          Tema: Calculo 1
        </Typography>
        <Typography component="p">
          Horário: 15:00 às 16:00
        </Typography>
        <Typography component="p">
          Data: 25/04/2020
        </Typography>
        </Grid>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);