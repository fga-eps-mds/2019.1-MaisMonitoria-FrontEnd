import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';


const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 1.1,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'top',
    alignItems: 'center',
  },
  fab: {
    margin: 0,
    top: 0,
    right: 4,
    left: 'auto',
    position: 'fixed',
  },

});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

class SnackbarWarning extends React.Component {
  state = {
    open: true,
  };

  handleClose = () => {
    const { router } = this.props;
    this.props.history.push(router);
    this.setState({ open: false });
  };

  render() {
    const { warning } = this.props;
    
    return (
      <div >
          
        <Snackbar
        
        open={this.state.open}
        autoHideDuration={2000}
        onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            
            onClose={this.handleClose}
            variant="warning"
            message={warning}
          />
        </Snackbar>
      </div>
    );
  }
}

SnackbarWarning.propTypes = {
  classes: PropTypes.object.isRequired,
  router: PropTypes.string.isRequired,
  warning: PropTypes.string.isRequired,
};

SnackbarWarning = withRouter(SnackbarWarning);
export default withStyles(styles2)(SnackbarWarning);