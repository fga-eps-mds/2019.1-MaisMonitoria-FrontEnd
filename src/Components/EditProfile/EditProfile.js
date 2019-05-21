import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import AppBar from '../AppBar/AppBar.js';
import Pp from '../../Assets/img/Pp.png';
import Course from './Course.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import firebase from 'firebase';
import './EditProfile.css'
import { validateEditProfile, validateName, success } from '../../Helpers/validates.js';
import SimpleModal from '../SimpleModal';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CustomizedSnackbars from '../SimpleModal/Snackbars';


const theme = createMuiTheme({
    palette: {
      primary: { main: '#44a1f2' },
      secondary: { main: '#fafafa' },
    },
    typography: { useNextVariants: false },
    overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'white',
          },
        },
    },
  });

class EditProfile extends Component {


    state = {
        name:'',
        course: '',
        telegram: '',
        email: '',
        isSignedin: false,
        error: '',
        showModal: false,
        errorName: false,
        showError: false,
    }

    componentDidMount(){
        this.getUserData();
    }

    getUserData = () =>{
        let userData = {};
        let token = {}
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                })
              
                axios.post(process.env.REACT_APP_GATEWAY+"/get_user/", token).then(user=>{
                    userData = user.data;
                    this.setState({name:userData["name"],course:userData["course"],email:userData["email"]})
                   
                });  
            }     
        })
    }

    editProfile = (e) =>{
        
        
        let token = {}
        const {name,course,email,error} = this.state;

        if(!validateEditProfile(this.state))
        {
            this.setState({ error: "Digite os campos obrigatórios" });
            this.setState({ showError: true });
            e.preventDefault();
            return; 
        }

        if(!validateName(this.state)){
            this.setState({ errorName: true });
            this.setState({ error: "Nome inválido" });
            this.setState({ showError: true });
            e.preventDefault();
            return;
        }

        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                    token["name"] = name;
                    token["course"] = course;
                    token["email"] = email;
                })
              
                axios.post(process.env.REACT_APP_GATEWAY+"/update_user/",token).then((x)=>{
                    if(success(x)) this.setState({showModal:true});
              })
            }     
        })
    }
    
  render() {
    return (
        
        <div style={{overflowX:'hidden'}} className="editBackground"> 
            {this.state.showModal? <SimpleModal router={"Profile"} title={'Usuario alterado com sucesso!'}  />:null}
            <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
                <AppBar/>
            </Grid>   
            <Grid container justify="center" alignContent="center" alignItems="center">
                <Grid item> 
                    <img src={Pp} className="ProfilePic" alt="Profilepic" style={{width: 130,height:130,margin:80,borderRadius:2}} ></img>
                </Grid>
            </Grid>
            <Grid container justify="center" alignContent="center" alignItems="center" direction="column" >
                <Grid item xs={12}> 
                    <TextField
                        error = {this.state.errorName }
                        required= "true"
                        id="name"
                        label="Nome"
                        multiline
                        Maxrows="4"
                        margin="normal"
                        defaultValue={this.state.name}
                        onChange={(event)=>this.setState({
                            name: event.target.value,
                        })}
                    />
                </Grid>
                <Grid item> 
                    <TextField
                        // error = {this.state.errorSenha }
                        required= "true"
                        id="telegram"
                        label="Telegram"
                        multiline
                        Maxrows="4"
                        placeholder="@"
                        margin="normal"
                        onChange={(event)=>this.setState({
                            telegram: event.target.value,
                        })}
                    />
                </Grid>
                <Grid item style={{padding:30}}>
                    <Course action={(course)=>{this.setState({course})}}/>
                </Grid>
            </Grid>
                <Grid container alignContent="center" justify="center" direction="row" spacing={24} alignItems="center">
                    {this.state.showError? <CustomizedSnackbars error={this.state.error}/>:null}
                </Grid>
            <Grid container justify="center" alignContent="center" alignItems="center" direction="row" spacing={24}>
                <Grid item>
                    <MuiThemeProvider theme={theme}>
                        <Button component={Link} variant="contained" onClick={this.editProfile} color="primary">
                            Confirmar
                        </Button>
                    </MuiThemeProvider>
                </Grid>
                <Grid item>
                    <MuiThemeProvider theme={theme}>
                        <Button component={Link} to="/Profile" variant="contained" color="primary">
                            Cancelar
                        </Button>
                    </MuiThemeProvider>
                </Grid>
            </Grid>
        </div>
        
    );   
  }
}

export default EditProfile;
