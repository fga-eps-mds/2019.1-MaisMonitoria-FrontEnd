import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';
import './SignUp.css';



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
              <Button variant="outlined">
                Registrar
              </Button>
              </Grid>
            <Grid item>
              <Button variant="outlined" >
                Cancelar
              </Button>
            </Grid>
      
        </Grid>
            
            
        </div>
    );   
  }
}

export default SignUp;