import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';
import './ModifyPassword.css';
import lightBlue from '@material-ui/core/colors/lightBlue';
import  {Link}  from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[50] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});


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
            <MuiThemeProvider theme={theme}>

              <Button component={Link} to="/Login" variant="outlined" variant="outlined" color="primary">
                Enviar
              </Button>
            </MuiThemeProvider>
          </Grid>
            <Grid item>
              <MuiThemeProvider theme={theme}>
                <Button component={Link} to="/ForgotPassword" variant="outlined" variant="outlined" color="primary"> 
                  Voltar
                </Button>
              </MuiThemeProvider>
              </Grid>
            </Grid>
            
            
          
        </div>
    );   
  }
}

export default ModificarSenha;
