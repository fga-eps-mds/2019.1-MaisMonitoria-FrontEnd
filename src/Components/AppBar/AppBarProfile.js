import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from '../../Assets/img/Logo.png';
import { Grid } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {withRouter} from 'react-router-dom';
import firebase from 'firebase';


const styles = theme =>({
  root: {
    position: 'fixed',
    width: '100%',  
    flexGrow: 1,
    zIndex: 100,
    
  },
  fab: {
    margin: 0,
    top: 8,
    right: 4,
    left: 'auto',
    position: 'fixed',
  },
});



function SimpleAppBar(props) {
  const { classes } = props;
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
 
  
  function handleClose() {
    firebase.auth().signOut().then(function() {
      props.history.push('/');
      
    }, function() {
    });   
  }
  function handleClose2() {
    setAnchorEl(null);
     
  }


  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  
  return (

    <div className={classes.root}>
    <Grid container>
      <AppBar position="static" color="primary" style={{ background: '#1DA1F2' }}>
        <Toolbar>
        <img src={logo} alt="Logo" width="40" height="40"/>
          <Typography variant="h6" color="inherit">
            +Monitoria
          </Typography>
          {auth && (
            <div className={classes.fab}>
              <IconButton
                aria-owns={open ? 'long-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}            
                onClose={handleClose2}>
                <MenuItem onClick={handleClose}>Sair</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      </Grid>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

SimpleAppBar = withRouter(SimpleAppBar);
export default withStyles(styles)(SimpleAppBar);