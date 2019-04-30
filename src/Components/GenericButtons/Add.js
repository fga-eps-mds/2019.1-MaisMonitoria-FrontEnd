import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../Feed/feed.css';
import RegisterMonitoring from '../RegisterMonitoring/RegisterMonitoring'

const styles = theme =>({
  
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 65,
    left: 'auto',
    position: 'fixed',
    margin: theme.spacing.unit,
  },
  
});

function ButtonSizes(props) {
  const { classes } = props;
  return (
      <Fab size="medium" style={{backgroundColor: '#1DA1F2',
          color: 'white'}} aria-label="Add" className={classes.fab}>
          
          <AddIcon />
      </Fab>
  );
}

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonSizes);