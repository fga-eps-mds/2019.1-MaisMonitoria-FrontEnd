import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';



class EsqueceuSenha extends Component {
  render() {
    return (
      <div style={{ padding: 80 }}>
        <Grid container  direction="column" justify="center" alignItems="center" spacing="24">
          <img src={logo} alt="Logo" />
          
          <Grid item >
            <TextField
              id="emailTextField"
              label="Email"
              margin="normal"
              />
          </Grid>
          </Grid>
          <Grid container alignContent="center" justify="center" direction="column" spacing="16" alignItems="center" style={{marginTop: 25}}>
          <Grid item >
              <Button variant="outlined">
                Enviar
              </Button>
              </Grid>
            <Grid item>
              <Button variant="outlined">
                Voltar
              </Button>
            </Grid>
            
            </Grid>
            
            
          
        </div>
    );   
  }
}

export default EsqueceuSenha;
