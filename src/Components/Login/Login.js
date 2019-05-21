import React, { Component } from 'react';
import './Login.css';
import { Grid, Button, TextField,} from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import  {Link}  from 'react-router-dom';
import firebase from 'firebase';
import Typography from '@material-ui/core/Typography';
import CustomizedSnackbars from '../SimpleModal/Snackbars';

const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[50] },
    secondary: { main: '#f44336' },
  },
  typography: { useNextVariants: true },
});

firebase.initializeApp({
  apiKey: process.env.REACT_APP_PATH_KEY,
  authDomain: process.env.REACT_APP_AUTH
});

class Login extends Component {
  state = {
    email: '',
    password: '',
    isAuthenticated: false,
    error: "",
    showError: false,
  };
  

  login = async (e) => {
    
    const { email, password } = this.state;
    if(!email || !password){
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
      this.setState({ showError: true});
      e.preventDefault();
    }else{
      await firebase.auth().signInWithEmailAndPassword(email, password).then((user)=>{
        this.setState({isAuthenticated: true});
      }).catch((except)=>{
        this.setState({ error: "Email ou Senha inválidos." });
        this.setState({ showError: true});
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
              error = {this.state.error}
              id="emailTextField"
              label="Email"
              margin="normal"
              required= "true"
              value={this.state.email}
              onChange={(event)=>this.setState({
              email: event.target.value,
              })}
              />
          </Grid>
          <Grid item >
            <TextField
              error = {this.state.error}
              id="senhaTextField"
              label="Senha"
              margin="normal"
              type="password"
              required= "true"
              value={this.state.password}
              onChange={(event)=>this.setState({
              password: event.target.value,
              })}
              />
          </Grid>
          <Grid container alignContent="center" justify="center" direction="row" spacing={50} alignItems="center">
              {this.state.showError? <CustomizedSnackbars error={this.state.error}/>:null}
          </Grid>
        </Grid>
        <Grid  container alignContent="center" justify="center" direction="column" spacing={24} alignItems="center" style={{marginTop: 25}}>
          <Grid item >
            <MuiThemeProvider theme={theme}>
              <Button component={Link} to={this.state.isAuthenticated?"/Feed":"/"} variant="outlined" color="primary" onClick={this.login}>
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
              <Link to="/ForgotPassword" style={{color:'#bdbdbd'}} >Esqueceu sua senha ?</Link>
        </Grid>
          
        </div>
    );
  }
}

export default Login;
