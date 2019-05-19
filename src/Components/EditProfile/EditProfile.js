import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import AppBar from '../AppBar/AppBar.js';
import Pp from '../../Assets/img/Pp.png';
import Course from './Course.js';
import { Link } from 'react-router-dom';
import { async } from 'q';
import axios from 'axios';
import firebase from 'firebase';
import './EditProfile.css'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
    palette: {
      primary: { main: lightBlue[50] },
      secondary: { main: '#11cb5f' },
    },
    typography: { useNextVariants: true },
  });
  

class EditProfile extends Component {

    state = {
        name:'',
        course: '',
        telgram: '',
        email: '',
        photo: null,
        isSignedin: false
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

    editProfile = () => {
        var aux = {}
        const header = { headers: { 'content-type': 'multipart/form-data' } }

        const fd = new FormData();
        fd.append('name', this.state.name)
        fd.append('course', this.state.course)
        fd.append('email', this.state.email)
        fd.append('photo', this.state.photo)

        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){  
                    fd.append('access_token', idToken)        
                })

                axios.post(process.env.REACT_APP_GATEWAY+"/update_user/", fd, header);
            }
        })
    }
    
  render() {
    return (
        
        <div style={{overflowX:'hidden'}} className="editBackground"> 
            <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
                <AppBar/>
            </Grid>   
            <Grid container justify="center" alignContent="center" alignItems="center">
                <Grid item> 
                    <img src={Pp} className="ProfilePic" alt="Profilepic" style={{width: 130,height:130,marginTop:80,borderRadius:2}} ></img>
                </Grid>
            </Grid>
            <Grid container justify="center" alignContent="center" alignItems="center" direction="column" >
                <Grid item xs={12}> 
                    <TextField
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
                <Grid item style={{padding:10}}>
                    <Course action={(course)=>{this.setState({course})}}/>
                </Grid>
                <Grid item style={{padding:30}}>              
                <input 
                    accept="image/*" 
                    id="raised-button-file" 
                    multiple 
                    type="file" 
                    onChange={(event)=>this.setState({
                    photo: event.target.files[0],
                    })}                
                /> 
                <label htmlFor="raised-button-file"> 
                    <Button raised component="span" variant="outlined" color="primary" > 
                    Escolher foto 
                    </Button> 
                </label>  
                </Grid>
            </Grid>
            <Grid container justify="center" alignContent="center" alignItems="center" direction="row" spacing={24}>
                <Grid item>
                    <Button component={Link} to="/Feed" variant="outlined" onClick={this.editProfile} color="primary">
                        Confirmar
                    </Button>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/Profile" variant="outlined" color="primary">
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
            
        </div>
        
    );   
  }
}

export default EditProfile;
