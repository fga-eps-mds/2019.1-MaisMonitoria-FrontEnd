import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Spinner from '../Loader/Spinner';
import Course from '../EditProfile/Course'
import { errors } from '../../Helpers/errors';
import SimpleModal from '../SimpleModal';
import CustomizedSnackbars from '../SimpleModal/Snackbars';
import logo from '../../Assets/img/Logo.png';
import { validateRegister, success, validateName, validatepasswordconfirm } from '../../Helpers/validates';
import './SignUp.css';

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
      passwordconfirm: '',
      course: '',
      telegram:'',
      photo: null,
    },
    isAuthenticated: false,
    isLoading: false,
    error: "",
    errorName: false,
    errorSenha: "",
    showModal: false,
    showError: false,
    file: null,
    imagePreviewUrl: null,
  };

  constructor(props) {
    super(props);
    this._handleImageChange = this._handleImageChange.bind(this);
    this.erase = this.erase.bind(this);
  }

  componentDidMount(){
    
  }

  _handleImageChange(event) {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({...this.state, file:file
      });
      this.setState({...this.state, imagePreviewUrl:reader.result})
      this.setState({ ...this.state, user: 
        { ...this.state.user, photo: file} })
    }

    reader.readAsDataURL(file)
  }

  erase(event){
    event.preventDefault();
    this.setState({imagePreviewUrl: null});
    this.setState({user:{photo:null}}); 
  }

  register = async (e) => {
    const { user } = this.state;  
    var aux = {}
    
    
    this.setState({ error: "" });
    this.setState({ errorName: false });
    this.setState({ errorSenha: "" });
    this.setState({ showError: false });
      
    if(!validateRegister(user))
    {
      this.setState({ error: "Digite os campos obrigatórios" });
      this.setState({ showError: true });
      
      return;
    }

    if(!validateName(user))
    {
      this.setState({ errorName: true });
      this.setState({ error: "Nome inválido" });
      this.setState({ showError: true });
      
      e.preventDefault();
      return;
    }
    
    if(!validatepasswordconfirm(user))
    {
      this.setState({ errorSenha: true });
      this.setState({ error: "Senha não coincide" });
      this.setState({ showError: true });
    
      e.preventDefault();
      return;
    }
    
    this.setState({ isLoading: true });
    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(()=>{
        
        firebase.auth().currentUser.getIdToken().then((idToken)=> {  
          aux = { 'token': idToken };        
          });
        }).catch((error)=>{
          if(error.code === 'auth/email-already-in-use'){
            
          }
          this.setState({error: errors[error.code]});
          this.setState({ showError: true });
          this.setState({ isLoading: false });
    });

    const fd = new FormData();
    fd.append('access_token', aux['token'])
    fd.append('name', user.name)
    fd.append('course', user.course)
    fd.append('photo', user.photo)
    fd.append('telegram', user.telegram)
    const header = { headers: { 'content-type': 'multipart/form-data' } }

    await axios.post(process.env.REACT_APP_GATEWAY+"/create_user/", fd, header).then((x)=>{
      if(success(x)) {
        
        this.setState({showModal:true});
      }
    }).catch(()=>{   
      var user = firebase.auth().currentUser;

      user.delete().then(function() {
        this.setState({ error: "Erro ao cadastrar, tente novamente." });
        this.setState({ showError: true });
      })
    });
  }
    
  render() {
    let $imagePreview = null;
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<img style={{borderRadius:'90px', width:'120px', height:'120px'}} src={this.state.imagePreviewUrl} alt =''  />);
    }
    return (
      <div className="SignUpBackground" style={{overflowY:'scroll'}}>
      {this.state.showModal? <SimpleModal router={""} title={'Usuario criado com sucesso!'}  />:null}
        <Grid style={{paddingLeft:10}}>
          <Grid container alignContent="center" justify="center" direction="column" alignItems="center" spacing={8}>
            <img src={logo} alt="Logo" width="120" height="120"/>
          </Grid>
          <Grid container alignContent="center" justify="center" direction="column" alignItems="center" spacing={24}>
            <Grid item >
              <TextField 
              error = {this.state.errorName}
              required= "true"
              id="nomeTextField"
              label="Nome"
              margin="normal"
              onChange={(event)=>this.setState({ ...this.state, user: 
                { ...this.state.user, name: event.target.value } })}
              />
            </Grid>
            <Grid item >
              <TextField
                required= "true"
                id="emailTextField"
                label="Email"
                margin="normal"
                type="email"
                onChange={(event)=>this.setState({ ...this.state, user: 
                  { ...this.state.user, email: event.target.value } })}
                />
            </Grid>
            <Grid item >
              <TextField                
                required= "true"
                id="telegramTextField"
                label="Telegram"
                margin="normal"
                placeholder="@"
                type="text"
                onChange={(event)=>this.setState({ ...this.state, user: 
                  { ...this.state.user, telegram: event.target.value } })}
                />
            </Grid>
            <Grid item>
                <Course action={(course)=>{this.setState({...this.state,user: 
                  {...this.state.user, course}})}}/>
            </Grid>             
            <Grid item >
              <TextField
                error = {this.state.errorSenha }
                required= "true"
                id="senhaTextField"
                label="Senha"
                margin="normal"
                type="password"
                onChange={(event)=>this.setState({ ...this.state, user: 
                  { ...this.state.user, password: event.target.value } })}
                />
            </Grid>
            <Grid item >
              <TextField
                error = {this.state.errorSenha }
                required= "true"
                id="repetirSenhaTextField"
                label="Repetir senha"
                margin="normal"
                type="password"
                onChange={(event)=>this.setState({ ...this.state, user: 
                  { ...this.state.user, passwordconfirm: event.target.value } })}
                />
            </Grid>
            {$imagePreview}
            {this.state.imagePreviewUrl ? 
              <Grid item>               
                <MuiThemeProvider theme={theme}>
                  <Button onClick={this.erase} raised component="span" variant="outlined" color="primary" > 
                    Remover Foto
                  </Button> 
                </MuiThemeProvider>
              </Grid>
              : 
              <Grid item>              
                <input 
                  accept=".png, .jpg" 
                  id="raised-button-file" 
                  multiple 
                  type="file" 
                  onChange={this._handleImageChange}
                  /> 
                <label htmlFor="raised-button-file"> 
                <MuiThemeProvider theme={theme}>
                  <Button  raised component="span" variant="outlined" color="primary" > 
                    Escolher foto 
                  </Button> 
                </MuiThemeProvider>
                </label>  
              </Grid>
            }
            <Grid container alignContent="center" justify="center" direction="row" spacing={24} alignItems="center">
              {this.state.showError? <CustomizedSnackbars error={this.state.error}/>:null}
            </Grid>
            <Grid item style={{marginTop: 25}}>
              {this.state.isLoading ? <Spinner />:
                  <Grid container alignContent="center" justify="center" direction="row" spacing={24} alignItems="center" style={{marginTop: 0}}>
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
                }
            </Grid>
          </Grid>
        </Grid> 
      </div>
    );   
  }
}

export default withRouter(SignUp);