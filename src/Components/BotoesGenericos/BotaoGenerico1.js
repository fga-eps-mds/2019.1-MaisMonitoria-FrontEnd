import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  cssRoot: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
  bootstrapRoot: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '3px 7px',
    border: '1px solid',
    lineHeight: 1.3,
    backgroundColor: '#1da1f2',
    borderColor: '#1da1f2',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    useNextVariants: true,
  },
});

function CustomizedButtons(props) {
  const { classes } = props;

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classNames(classes.margin, classes.cssRoot)}
      >
        Custom CSS
      </Button>
      <MuiThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          MuiThemeProvider
        </Button>
      </MuiThemeProvider>
      <Button
        variant="contained"
        color="primary"
        disableRipple
        className={classNames(classes.margin, classes.bootstrapRoot)}
      >
        Bootstrap
      </Button>
    </div>
  );
}

CustomizedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedButtons);