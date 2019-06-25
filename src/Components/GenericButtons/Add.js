import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withRouter } from 'react-router-dom'

import '../Feed/feed.css';

const styles = theme =>({
  
  fab: {
    top: 'auto',
    right: 20,
    bottom: 65,
    left: 'auto',
    position: 'fixed',
    margin: theme.spacing.unit,
  },
  
});

const ButtonSizes = ({ classes, history }) => {
  return (
      <Fab onClick={() => history.push('/RegisterMonitoring')} size="medium" style={{backgroundColor: '#1DA1F2',
          color: 'white'}} aria-label="Add" className={classes.fab}>
          
          <AddIcon />
      </Fab>
  );
}

ButtonSizes.propTypes = {
  classes: PropTypes.object.isRequired,
};
const materialUiStyles = withStyles(styles)(ButtonSizes)
export default withRouter(materialUiStyles)