import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import logo from '../../Assets/img/Logo.png';
import './SignUp.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import Course from '../EditProfile/Course'
import axios from 'axios';

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
    isAuthenticated: false,
    course: '',
    error: "",
    validName:false,
    validEmail:false,
    validCourse: false,
    validSenha:false,
    validRegister: false
  };
  
  register = async (e) => {
    const { email, password, name, telegram, course } = this.state;  
    var userData = {}
   

    if(!course || !name || !email || !password)//valida se os campos obrigatorios foram preenchidos
    {
      this.setState({ error: "Digite os campos obrigatorios" });
      this.setState({validName:false})
      this.setState({validCourse:false})
      this.setState({validEmail:false})
      this.setState({validSenha:false})
      e.preventDefault();
    }


    function validaNome(campo) {  //função para validar se o nome tem algum caracter especial
      var regex = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
      if(campo.match(regex)) {
          return false;
      } else { return true; }
    }     

    if(!name){

    }
    else if(validaNome(name) == true){ // valida se o nome tem algum caracter especial
      this.setState({ error: "Nome inválido" });
      this.setState({validName:false})
      e.preventDefault();
    }else{
      this.setState({validName:true})
      
    }

    // if(validName == true && validSenha == true && validCourse == true && validEmail == true){
    //   this.setState({validRegister:true})
    // }

    await firebase.auth()
      .createUserWithEmailAndPassword(email, password).then((user)=>{
        firebase.auth().currentUser.getIdToken().then(function(idToken) {  
          userData = {"name": name, "course": course, "access_token": idToken}
          
        });
      });
    
    await axios.post(process.env.REACT_APP_GATEWAY+"/create_user/", userData);


  }
  
  render() {
    return (
      <div className="SignUpBackground" style={{overflowY:'scroll'}}>
        <Grid style={{paddingLeft:10}}>
          <Grid container alignContent="center" justify="center" direction="column" alignItems="center" spacing={12}>
            <img src={logo} alt="Logo" width="120" height="120"/>
          </Grid>
          <Grid container alignContent="center" justify="center" direction="row" alignItems="center" spacing={24}>
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
          </Grid>

          <Grid container alignContent="center" justify="center" direction="row" alignItems="center" spacing={24}>
            <Grid item >
              <TextField
                id="emailTextField"
                label="Telegram"
                margin="normal"
                placeholder="@"
                type="text"
                onChange={(event)=>this.setState({
                  telegram: event.target.value,
                })}
                />
            </Grid>
            <Grid item>
                <Course action={(course)=>{this.setState({course})}}/>
            </Grid>
          </Grid>
          <Grid container alignContent="center" justify="center" direction="row" alignItems="center" spacing={24}>
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
            {this.state.error && <p>{this.state.error}</p>}
            </Grid>
            <Grid container alignContent="center" justify="center" direction="row" spacing="24" alignItems="center" style={{marginTop: 25}}>
              <Grid item >
                <MuiThemeProvider theme={theme}>
                  <Button component={Link} to={this.state.validRegister?"/":"/SignUp"} variant="outlined" onClick={this.register} color="primary">
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
          </Grid>
            
        </div>
    );   
  }
}

export default SignUp;