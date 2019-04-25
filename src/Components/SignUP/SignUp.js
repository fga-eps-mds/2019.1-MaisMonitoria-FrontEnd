import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';
import './SignUp.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import {Link} from 'react-router-dom';
import firebase from 'firebase';


const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[50] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    isAuthenticated: false
  };
  
  register = async () => {
    const { email, password, name } = this.state;  
    try{
      const user = await firebase.auth()
        .createUserWithEmailAndPassword(email, password);
        this.setState({isAuthenticated: true});
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              user.getIdToken().then(function(idToken) {  
                var userData = {name: name, user_token: idToken}
                userData = JSON.stringify(userData)
              });
          }
      });    
      
      }catch(e){
      console.log(e);
    }
  }
  
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
            onChange={(event)=>this.setState({
              name: event.target.value,
            })}
            />

          </Grid>
          <Grid item >
            <TextField
              id="emailTextField"
              label="Email"
              margin="normal"
              type="email"
              onChange={(event)=>this.setState({
                email: event.target.value,
              })}
              />
          </Grid>
          <Grid item >
            <TextField
              id="senhaTextField"
              label="Senha"
              margin="normal"
              type="password"
              onChange={(event)=>this.setState({
                password: event.target.value,
              })}
             
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
                <Button component={Link} to="/SignUp" variant="outlined" onClick={this.register} color="primary">
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