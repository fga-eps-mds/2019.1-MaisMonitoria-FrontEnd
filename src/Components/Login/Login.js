import React, { Component } from 'react';
import './Login.css';
import { Grid, Button, TextField, Link } from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[50] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});


class Login extends Component {
  
  render() {
    return (
      <div className="LoginBackground">
        <Grid container alignContent="center" justify="center" direction="column" alignItems="center">
          <img src={logo} alt="Logo" />
          
          <Grid item >
            <TextField
              id="emailTextField"
              label="Email"
              margin="normal"
              />
          </Grid>
          <Grid item >
            <TextField
              id="senhaTextField"
              label="Senha"
              margin="normal"
              type="password"
              
              />
          </Grid>
        </Grid>
          <Grid component={Link} to="/Feed" container alignContent="center" justify="center" direction="column" spacing="24" alignItems="center" style={{marginTop: 25}}>
            <Grid item >
            <MuiThemeProvider theme={theme}>
              <Button  variant="outlined" color="primary" >
                  Login
                </Button>
                </MuiThemeProvider>
              </Grid>
              
              <Grid item>
              <MuiThemeProvider theme={theme}>

                <Button component={Link} to="/RSignUp" variant="outlined" color="primary">
                  Registrar
                </Button>
                </MuiThemeProvider>

              </Grid>
              <a  className="ForgotPasswordLink" href="#">Esqueceu sua senha ?</a>  
          </Grid>
            
            
          
        </div>
    );   
  }
}

export default Login;
