import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import AppBar from '../AppBar/AppBar.js';
import Pp from '../../Assets/img/Pp.png';
import Course from './Course.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import firebase from 'firebase';
import './EditProfile.css';
import { validateEditProfile, validateName, success } from '../../Helpers/validates.js';
import SimpleModal from '../SimpleModal';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CustomizedSnackbars from '../SimpleModal/Snackbars';
import SnackbarWarning from '../SimpleModal/SnackBarsWarning';
import Spinner from '../Loader/Spinner';


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
        photo: null,
        showWarning: false,
        isLoading: false,
        description: '',
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
                    this.setState({name:userData.name, telegram:userData.telegram, course:userData.course, email:userData.email, photo:userData.photo, description:userData.description}) 
                });  
            }else{
                this.props.history.push('/');
            }
        })
    }

    editProfile = (e) =>{
        const header = { headers: { 'content-type': 'multipart/form-data' } }
        const fd = new FormData();

        fd.append('name', this.state.name)
        fd.append('course', this.state.course)
        fd.append('email', this.state.email)
        fd.append('photo', this.state.photo)
        fd.append('telegram', this.state.telegram)
        fd.append('description', this.state.description)
        
        this.setState({ showError: false });
        this.setState({ errorName: false });
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

        this.setState({ isLoading: true });
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){  
                    fd.append('access_token', idToken)        
                })
              
                axios.post(process.env.REACT_APP_GATEWAY+"/update_user/", fd, header).then((x)=>{
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
                    <img src={Pp} className="ProfilePic" alt="Profilepic" style={{width: 130,height:130,marginTop:80,borderRadius:2}} ></img>
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
                        value={this.state.name}
                        onChange={(event)=>this.setState({
                            name: event.target.value,
                        })}
                    />
                </Grid>
                <Grid item> 
                    <TextField
                        required= "true"
                        id="telegram"
                        label="Telegram"
                        multiline
                        Maxrows="4"
                        placeholder="@"
                        margin="normal"
                        value={this.state.telegram}
                        onChange={(event)=>this.setState({
                            telegram: event.target.value,
                        })}
                    />
                </Grid>
                <Grid item> 
                    <TextField
                        id="description"
                        label="Descrição"
                        multiline
                        rows="4"
                        margin="normal"
                        value={this.state.description}
                        variant="outlined"
                        onChange={(event) => this.setState({
                            description: event.target.value,
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
            <Grid container alignContent="center" justify="center" direction="row" spacing={24} alignItems="center">
                {this.state.showError? <CustomizedSnackbars error={this.state.error}/>:null}
            </Grid>
            <Grid item style={{marginTop:30}} >
                { this.state.isLoading ? <Spinner />: 
                    <Grid container justify="center" alignContent="center" alignItems="center" direction="row" spacing={24} style={{marginTop:30}}>
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
                }
            </Grid>
        </div> 
    );   
  }
}

export default EditProfile;
