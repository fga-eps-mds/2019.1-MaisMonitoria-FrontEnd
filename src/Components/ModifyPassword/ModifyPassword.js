import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';
import './ModifyPassword.css';
import lightBlue from '@material-ui/core/colors/lightBlue';
import  {Link}  from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import firebase from 'firebase';

const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[50] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});


class ModificarSenha extends Component {
  state = {
    copyPassword:'',
    newPassword:'',
    isAuthenticated: false,
    error: ""
  };
  
  modifypassword = async (a) => {      
      const { newPassword, copyPassword} = this.state;
      if(!newPassword || !copyPassword){
        this.setState({ error: "Digite sua senha continuar!" });
        a.preventDefault();        
      }else{
        if(newPassword != copyPassword){
          this.setState({ error: "Senhas diferentes" });
          a.preventDefault();
        }
        else{
        await firebase.auth().currentUser.updatePassword(newPassword).then(()=>{
          this.setState({isAuthenticated: true});
        })
        };
      }
    
      
    }

  render() {    
    return (
      <div className="ModifyPasswordBackground">
        <Grid container alignContent="center" justify="center" direction="column" alignItems="center">
          <img src={logo} alt="Logo" />
          
          <Grid item >
            <TextField
              id="novaSenhaTextField"
              label="Nova Senha"
              margin="normal"
              type="password"
              value={this.state.newPassword}
              onChange={(event)=>this.setState({
              newPassword: event.target.value,
              })}
             
              />
          </Grid>
          <Grid item >
            <TextField
              id="confirmarSenhaTextField"
              label="Confirmar nova Senha"
              margin="normal"
              type="password"
              value={this.state.copyPassword}
              onChange={(event)=>this.setState({
              copyPassword: event.target.value,
              })}
              />
              
          </Grid>
          {this.state.error && <p>{this.state.error}</p>}
          </Grid>
          <Grid container alignContent="center" justify="center" direction="column" spacing="24" alignItems="center" style={{marginTop: 25}}>
          <Grid item >
            <MuiThemeProvider theme={theme}>

              <Button component={Link} to={this.state.isAuthenticated?"/":"/ModifyPassword"} variant="outlined" variant="outlined" color="primary" onClick={this.modifypassword} >
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
