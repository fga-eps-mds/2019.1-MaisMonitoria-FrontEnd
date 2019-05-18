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
import { convertPatternGroupToTask } from 'fast-glob/out/managers/tasks';
import { validateRegister, success, validateName, validatepasswordconfirm } from '../../Helpers/validates';
import { errors } from '../../Helpers/errors';
import {withRouter} from 'react-router-dom';
import SimpleModal from '../SimpleModal';

const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[50] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});


class SignUp extends Component {
  state = {
    user :{
      email: '',
      password: '',
      name: '',
      course: '',
      passwordconfirm: ''
    },
    isAuthenticated: false,
    error: "",
    showModal: false,
  };
  
  register = (e) => {
    const { user } = this.state;  
    var userData = {}
   

    if(!validateRegister(user))//valida se os campos obrigatorios foram preenchidos
    {
      this.setState({ error: "Digite os campos obrigatórios" });
      e.preventDefault();
      return;
    }

    if(!validateName(user))//valida se os campos obrigatorios foram preenchidos
    {
      this.setState({ error: "Nome inválido" });
      e.preventDefault();
      return;
    }
    
    if(!validatepasswordconfirm(user))
    {
      this.setState({ error: "A senha não coincide" });
      e.preventDefault();
      return;
    }
    
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(()=>{
        
        firebase.auth().currentUser.getIdToken().then((idToken)=> {  
           userData = {...user,access_token:idToken};
           axios.post(process.env.REACT_APP_GATEWAY+"/create_user/", userData).then((x)=>{
             if(success(x)) {
              this.setState({showModal:true});
             }           
           });
        });
       
      }).catch((error)=>{
        console.log(error);
        this.setState({error: errors[error.code]});
      });
    
   


  }
  
  render() {
    return (
      <div className="SignUpBackground" style={{overflowY:'scroll'}}>
      {this.state.showModal? <SimpleModal title={'title'} description={'Usuario criado com sucesso'} />:null}
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
              onChange={(event)=>this.setState({ ...this.state, user: { ...this.state.user, name: event.target.value } })}
              />
            </Grid>
            <Grid item >
              <TextField
                id="emailTextField"
                label="Email"
                margin="normal"
                type="email"
                onChange={(event)=>this.setState({ ...this.state, user: { ...this.state.user, email: event.target.value } })}
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
                <Course action={(course)=>{this.setState({...this.state,user: {...this.state.user, course}})}}/>
            </Grid>
          </Grid>
          <Grid container alignContent="center" justify="center" direction="row" alignItems="center" spacing={24}>
            <Grid item >
              <TextField
                id="senhaTextField"
                label="Senha"
                margin="normal"
                type="password"
                onChange={(event)=>this.setState({ ...this.state, user: { ...this.state.user, password: event.target.value } })}
                />
            </Grid>
            <Grid item >
              <TextField
                id="repetirSenhaTextField"
                label="Repetir senha"
                margin="normal"
                type="password"
                onChange={(event)=>this.setState({ ...this.state, user: { ...this.state.user, passwordconfirm: event.target.value } })}
                />
            </Grid>
            </Grid>
            <Grid container alignContent="center" justify="center" direction="row" spacing="24" alignItems="center">
                {this.state.error && <p>{this.state.error}</p>}
            </Grid>
            <Grid container alignContent="center" justify="center" direction="row" spacing="24" alignItems="center" style={{marginTop: 25}}>
              <Grid item >
                <MuiThemeProvider theme={theme}>
                  <Button component={Link}  variant="outlined" onClick={this.register} color="primary">
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

export default withRouter(SignUp);