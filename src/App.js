import React, { Component } from 'react';
import './Components/Login/Login.css';
import { Grid, Button, TextField,} from '@material-ui/core' ;
import logo from './Assets/img/Logo.png';
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

class App extends Component {
  state = {
    email: '',
    password: '',
    isAuthenticated: false
  };

  
  

  login = async () => {
    const { email, password } = this.state;
      const user = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
      this.setState({isAuthenticated: true});
  }



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
        </Grid>
        <Grid  container alignContent="center" justify="center" direction="column" spacing="24" alignItems="center" style={{marginTop: 25}}>
          <Grid item >
            <MuiThemeProvider theme={theme}>
              <Button component={Link} to="/" variant="outlined" color="primary" onClick={this.login}>
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

export default App;
