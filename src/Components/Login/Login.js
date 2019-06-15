import React, { Component } from 'react';
import { Grid, Button, TextField,} from '@material-ui/core' ;
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import  {Link}  from 'react-router-dom';
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';

import Spinner from '../Loader/Spinner';
import CustomizedSnackbars from '../SimpleModal/Snackbars';
import logo from '../../Assets/img/Logo.png';
import './Login.css';
import '../Feed/Feed.js';


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
    isLoading: false
  };
  
  
  login = async (e) => {
    
    
    const { email, password } = this.state;
    if(!email || !password){
      this.setState({ error: "Preencha e-mail e senha para continuar!" });
      this.setState({ showError: true});
      e.preventDefault();
    }else{
      this.setState({ isLoading: true });
      await firebase.auth().signInWithEmailAndPassword(email, password).then((user)=>{
        this.setState({ isAuthenticated: true });
        const route = this.state.isAuthenticated?"/Feed":"/"
        this.props.history.push(route);
      }).catch((except)=>{
        this.setState({ error: "Email ou Senha inválidos." });
        this.setState({ showError: true });
      });
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="LoginBackground" style={{overflowY:'auto',overflowX:'hidden'}}>
        <Grid container alignContent="center" justify="center" direction="column" alignItems="center">
          <div style={{ padding: 80}}>  
            <Grid container alignContent="center" justify="center" direction="column" alignItems="center" spacing={24}>
              <img src={logo} alt="Logo" />
              <Grid item >
                <TextField
                  error = {this.state.error}
                  id="emailTextField"
                  label="Email"
                  margin="normal"
                  required= {true}
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
                  required= {true}
                  value={this.state.password}
                  onChange={(event)=>this.setState({
                  password: event.target.value,
                  })}
                  />
              </Grid>
              {this.state.showError? <CustomizedSnackbars error={this.state.error}/>:null}
            </Grid>
            <Grid item style={{marginTop:50}}>
              { this.state.isLoading ? <Spinner />: 
                <Grid  container alignContent="center" justify="center" direction="column" spacing={24} alignItems="center" style={{marginTop:-50}}>
                  <Grid item >
                    <MuiThemeProvider theme={theme}>
                      <Button variant="outlined" color="primary" onClick={this.login}>
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
                  <Link to="/ForgotPassword" style={{color:'#bdbdbd'}} >
                    Esqueceu sua senha ?
                  </Link>
                </Grid>
              }
            </Grid>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Login);
