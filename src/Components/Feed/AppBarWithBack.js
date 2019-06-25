import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from '../../Assets/img/Logo.png';
import { Grid } from "@material-ui/core";

 
import { ReactComponent as Back } from '../../Assets/svg/arrow-left.svg';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';


const theme = createMuiTheme({
    palette: {
      primary: { main: "#44a1f2" },
      secondary: { main: '#11cb5f' },
    },
    typography: { useNextVariants: true },
});

const styles = {
  root: {
    position: 'fixed',
    width: '100%',  
    flexGrow: 1,
    zIndex: 100,
    margin:0,
  },
};

function SimpleAppBar(props) {
  const { classes,router } = props;

  return (

    <div className={classes.root}>
    <Grid container>
      <AppBar position="static" color="primary" style={{ background: '#1DA1F2' }}>
        <Toolbar>
            <MuiThemeProvider theme={theme}>
                <Icon style= {{margin: 0}} component={Link} to={router} color="primary" aria-label="Edit" >
                    <Back/>
                </Icon>
            </MuiThemeProvider>
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
  router: PropTypes.string,
};

SimpleAppBar.defaultProps = {
  router: "/Feed",
 };

document.body.classList.add("no-sroll")
export default withStyles(styles)(SimpleAppBar);