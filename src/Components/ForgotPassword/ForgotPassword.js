import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';
import './ForgotPassword.css';
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

class ForgotPassword extends Component {
  render() {
    return (
      <div className="ForgotPasswordBackground">
        <Grid container  alignContent="center" justify="center" direction="column" alignItems="center">
          <div style={{ padding: 80 }}>
      
      
        <Grid container  alignContent="center" justify="center" direction="column" alignItems="center" spacing="24">
          <img src={logo} alt="Logo" />
          
          <Grid item md-auto>
            <TextField
              id="emailTextField"
              label="Email"
              margin="normal"
              />
          </Grid>
          </Grid>
          <Grid container alignContent="center" justify="center" direction="column" spacing="16" alignItems="center" style={{marginTop: 25}}>
          <Grid item md-auto>
            <MuiThemeProvider theme={theme}>

              <Button component={Link} to="/ModifyPassword" variant="outlined" color="primary">
                Enviar
              </Button>
            </MuiThemeProvider>

              </Grid>
            <Grid item md-auto>
              <MuiThemeProvider theme={theme}>
                <Button component={Link} to="/" variant="outlined" color="primary">
                  Voltar
                </Button>
              </MuiThemeProvider>
            </Grid>
            
            </Grid>
            </div>
            </Grid>
            
        </div>
      
    );   
  }
}

export default ForgotPassword;
