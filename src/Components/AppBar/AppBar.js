import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from '../../Assets/img/Logo.png';
import { Grid } from "@material-ui/core";

 
const styles = {
  root: {
    position: 'fixed',
    width: '100%',  
    flexGrow: 1,
    zIndex: 100,
    
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (

    <div className={classes.root}>
    <Grid container>
      <AppBar position="static" color="primary" style={{ background: '#1DA1F2' }}>
        <Toolbar>
        <img src={logo} alt="Logo" width="40" height="40"/>
          <Typography variant="h6" color="inherit">
            +Monitoria
          </Typography>
        </Toolbar>
      </AppBar>
      </Grid>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);