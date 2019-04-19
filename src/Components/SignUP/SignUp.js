import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';
import './SignUp.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import {Link} from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[50] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});



class SignUp extends Component {
  render() {
    return (
      <div className="SignUpBackground">
        <Grid container alignContent="center" justify="center" direction="column" alignItems="center">
          <img src={logo} alt="Logo" width="120" height="120"/>
          <Grid item >
            <TextField
            id="nomeTextField"
            label="Nome"
            margin="normal"
            />

          </Grid>
          <Grid item >
            <TextField
              id="emailTextField"
              label="Email"
              margin="normal"
              type="email"
             
             
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
          <Grid item >
            <TextField
              
              
              id="repetirSenhaTextField"
              label="Repetir senha"
              margin="normal"
              type="password"
             
              />
          </Grid>
          </Grid>
          <Grid container alignContent="center" justify="center" direction="column" spacing="24" alignItems="center" style={{marginTop: 25}}>
            <Grid item >
              <MuiThemeProvider theme={theme}>
                <Button component={Link} to="/" variant="outlined" color="primary">
                 Registrar
                </Button>
              </MuiThemeProvider>
            </Grid>
            <Grid item>
              <MuiThemeProvider theme={theme}>
                <Button component={Link} to="/" variant="outlined" color="primary" >
                  Cancelar
                </Button>
              </MuiThemeProvider>
            </Grid>
      
          </Grid>
            
        </div>
    );   
  }
}

export default SignUp;