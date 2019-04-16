import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';
import './ModifyPassword.css';



class ModificarSenha extends Component {
  render() {
    return (
      <div className="ModifyPasswordBackground">
        <Grid container alignContent="center" justify="center" direction="column" alignItems="center">
          <img src={logo} alt="Logo" />
          
          <Grid item >
            <TextField
              id="codigoTextField"
              label="Código:"
              margin="normal"
              />
          </Grid>
          <Grid item >
            <TextField
              id="novaSenhaTextField"
              label="Nova Senha"
              margin="normal"
              type="password"
             
              />
          </Grid>
          <Grid item >
            <TextField
              id="confirmarSenhaTextField"
              label="Confirmar nova Senha"
              margin="normal"
              type="password"
              />
          </Grid>
          </Grid>
          <Grid container alignContent="center" justify="center" direction="column" spacing="24" alignItems="center" style={{marginTop: 25}}>
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

export default ModificarSenha;
