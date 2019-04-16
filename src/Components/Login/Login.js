import React, { Component } from 'react';
import './Login.css';
import { Grid, Button, TextField } from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';





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
          <Grid container alignContent="center" justify="center" direction="column" spacing="24" alignItems="center" style={{marginTop: 25}}>
            <Grid item >
              <Button  variant="outlined">
                  Login
                </Button>
              </Grid>
              <Grid item>
                <Button  variant="outlined">
                  Registrar
                </Button>
              </Grid>
              <a href="#">Esqueceu sua senha ?</a>  
          </Grid>
            
            
          
        </div>
    );   
  }
}

export default Login;
