import React, { Component } from 'react';
import './Login.css';
import { Grid, Button, TextField,} from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import  {Link}  from 'react-router-dom';
import firebase from 'firebase';

const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[50] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});

firebase.initializeApp({
  apiKey:"AIzaSyCrE2NKARsLRCPoy-dF8flrIG0CYoovkUE",
  authDomain: "maismonitoria-fe31c.firebaseapp.com"
});

class Login extends Component {
  state = {
    email: '',
    password: '',
    isAuthenticated: false,
    error: ""
  };
  

  login = async (e) => {
    
    const { email, password } = this.state;
    if(!email || !password){
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
      e.preventDefault();
    }else{
      await firebase.auth().signInWithEmailAndPassword(email, password).then((user)=>{
        this.setState({isAuthenticated: true});  
      }).catch((except)=>{
        this.setState({ error: "Usuário inválido" });
        e.preventDefault();
      });
    }
  }

  render() {
    return (
      <div className="LoginBackground" style={{overflowY:'auto',overflowX:'hidden'}}>
        <Grid container alignContent="center" justify="center" direction="column" alignItems="center">
          
          <img src={logo} alt="Logo" />
          <Grid item >
            <TextField
              id="emailTextField"
              label="Email"
              margin="normal"
              value={this.state.email}
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
              value={this.state.password}
              onChange={(event)=>this.setState({
                password: event.target.value,
              })}
              />
          </Grid>
          {this.state.error && <p>{this.state.error}</p>}
        </Grid>
        <Grid  container alignContent="center" justify="center" direction="column" spacing="24" alignItems="center" style={{marginTop: 25}}>
          <Grid item >
            <MuiThemeProvider theme={theme}>
              <Button component={Link} to={this.state.isAuthenticated? "/Feed":"/"} variant="outlined" color="primary" onClick={this.login}>
                  Login
              </Button>
            </MuiThemeProvider>
          </Grid>  
          <Grid item>
            <MuiThemeProvider theme={theme}>
              <Button component={Link} to="/SignUp" variant="outlined" color="primary">
                Registrar
              </Button>
              </MuiThemeProvider>
          </Grid>
              <a  className="ForgotPasswordLink"><Link to="/ForgotPassword" >Esqueceu sua senha ?</Link></a>  
        </Grid>
          
        </div>
    );
  }
}

export default Login;
