import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import logo from '../../Assets/img/Logo.png';



const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed',
  },
  grow: {
    flexGrow: 1,
  },
  
  appBar: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },

  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class SearchAppBar extends React.Component {

  handleChange(e) {
    const search = e.target.value;
    this.props.changesearch(search);
  }

  render() {
    const { classes } = this.props;
  
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary" style={{ background: '#1DA1F2' }}>
        <Toolbar>
        <img src={logo} alt="Logo" width="40" height="40"/>

          <Typography className={classes.appBar} variant="h6" color="inherit" noWrap>
            +Monitoria
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            
            <InputBase placeholder="Pesquisar" value={this.props.search} onChange={this.handleChange.bind(this)} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );

  }
}
  SearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  
};

export default withStyles(styles)(SearchAppBar);
