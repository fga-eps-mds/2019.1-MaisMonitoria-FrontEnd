import React from 'react';
import { Grid, Typography,Button } from "@material-ui/core";
import firebase from 'firebase';
import axios from 'axios';
import AppBar from './AppBarWithBack';
import './ExpandedCard.css'
import Spinner from '../Loader/Spinner';
import AlertDialog from '../SimpleModal/AlertDialog';

import { ReactComponent as Logo } from '../../Assets/svg/telegram.svg';
import { ReactComponent as Like } from '../../Assets/svg/like.svg';
import Fab from '@material-ui/core/Fab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Link } from 'react-router-dom';

import {withRouter} from 'react-router-dom';
import {success} from '../../Helpers/validates';

const theme = createMuiTheme({
    palette: {
      primary: { main: "#44a1f2" },
      secondary: { main: '#11cb5f' },
    },
    typography: { useNextVariants: true },
    overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'white',
          },
        },
    },
});

class ExpandedCard extends React.Component {
    
    state = {
        tutoringName: '',
        tutoringDescription: '',
        tutoringTheme: '',
        monitorName: '',
        photo: '',
        telegram:'',
        id_monitor:'',
        id_user:'',
        id_tutoring:'',
        likes: '',
        total_likes: 0,
        object_like: [],
        user_liked: false,
        person: [],
        isLoading: false
    }

    componentWillMount =  async () => {
        var token = {};
        var idTutoring = this.props.match.params.id_tutoring;
        this.setState({user_liked:false});
        this.setState({id_tutoring:idTutoring});
        
        await firebase.auth().onAuthStateChanged(user =>{
        this.setState({id_tutoring:idTutoring});
        this.setState({ isLoading: true });
        this.setState({isSignedIn: !!user});
            if(user){
                this.setState({id_user:user.uid})
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                    token["id_tutoring_session"] = idTutoring;
                });
                
                axios.post(process.env.REACT_APP_GATEWAY+"/get_tutoring/", token)
                    .then(res => {
                        this.setState({person:res.data});
                        for(let cont = 0; cont < this.state.person.total_likes; cont++){
                            this.state.object_like[cont]= this.state.person.likes[cont];
                        }
                       for(let cont = 0; cont < this.state.person.total_likes; cont++){
                            if(this.state.object_like[cont].user_that_likes.user_account_id === this.state.id_user){
                                this.setState({user_liked:true});
                            }
                       } 
                       this.setState({tutoringName:this.state.person.name, tutoringTheme:this.state.person.subject, tutoringDescription:this.state.person.description,
                        monitorName: this.state.person.monitor.name, photo:this.state.person.monitor.photo, telegram:this.state.person.monitor.telegram,
                        id_monitor:this.state.person.monitor.user_account_id, likes:this.state.person.likes,
                        total_likes:this.state.person.total_likes});      
                    });
                    this.setState({ isLoading: false });
            }else{
                this.props.history.push('/');
            }
        });    
    }
    
    

    createLike = async() =>{
       
        await  setTimeout(function() {
            if(this.state.user_liked !==true){
                var token = {};
                var idTutoring = this.props.match.params.id_tutoring;
                token["user_that_likes"] = this.state.id_user;
                token["tutoring_session"] = idTutoring;


                        firebase.auth().currentUser.getIdToken().then(function(idToken){
                            token["access_token"] = idToken;
                        });
                        axios.post(process.env.REACT_APP_GATEWAY+"/like_tutoring/", token).then((x)=>{
                            if(success(x)) {
                                this.componentWillMount();
                            }
                        });
                    }
                this.setState({ isLoading: false });
                this.setState({user_liked:true});
            

        }.bind(this), 100)
          
    }

    
    
    deleteLike = async() =>{
        await setTimeout(function() {
             if(this.state.user_liked !==false){
                var token = {};
                var idTutoring = this.props.match.params.id_tutoring;
                token["tutoring_session"] = idTutoring;
                
                for(let cont = 0; cont < this.state.total_likes; cont++){
                    if(this.state.object_like[cont].user_that_likes.user_account_id === this.state.id_user){
                        token["id_like"] = this.state.object_like[cont].id_like;
                        this.state.object_like.splice(cont, 1);
                    }
                }
                
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                });
                axios.post(process.env.REACT_APP_GATEWAY+"/like_delete/", token).then((x)=>{
                    if(success(x)) {
                        
                        this.componentWillMount();
                    }
                });
                    
                this.setState({user_liked:false});

            }
        }.bind(this), 200)
    }
  render() {
    var texto =  this.state.telegram;
    var er = texto;
    texto = er.replace('@','');
        
    var photoUrl = this.state.photo;
    if( photoUrl != null && window.location.hostname === 'localhost'){
        photoUrl = photoUrl.replace("api-monitoria","localhost")
      } else if(photoUrl === null){
        photoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaLMnex1QwV83TBQgxLTaoDAQlFswsYy62L3mO4Su-CMkk3jX"
      }

    return (
        <div className='div'>
            
            <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
               <AppBar router={"/Feed"}/>    
            </Grid>            
            <Grid container justify="center" direction="row" style={{paddingTop:80, paddingLeft:15,paddingBottom:15}} className="teste" >
                {(this.state.id_monitor !== this.state.id_user)? 
                <Grid item>                        
                    <Link to="/ProfileMonitor"><img src={photoUrl} style={{width:140, height:140}} alt=''></img></Link>
                </Grid>: null} 
                {(this.state.id_monitor === this.state.id_user)? 
                <Grid item>                        
                    <img src={photoUrl} style={{width:140, height:140}} alt=''></img>
                </Grid>: null} 
                <Grid item style={{marginTop:50, marginLeft:25}} >
                    {this.state.isLoading ? <Spinner />:    
                    <Grid>
                        <Grid container justify="center" direction="column" alignItems="center" alignContent="center" style={{marginTop:-50, marginLeft:-25}}>
                            <Grid item style={{marginTop:5, marginLeft:50}} >
                                <h1>Monitor</h1>
                            </Grid>
                            <Grid item>
                                <Typography style={{marginLeft:50}}>
                                    Nome: {this.state.monitorName}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" direction="column" alignItems="center" alignContent="center" >
                        {(this.state.id_monitor !== this.state.id_user)? 
                            <MuiThemeProvider  theme={theme}>
                                <Button style={{marginTop:40,marginLeft:50}} component={Link} variant="contained" to={`/ProfileMonitor/${this.state.id_monitor}`} color="primary">
                                    Ver perfil
                                </Button>
                                
                            </MuiThemeProvider>: null }
                            
                        {(this.state.id_monitor === this.state.id_user)?
                          <Grid container direction="row" justify="center" alignItems="center" >
                            <MuiThemeProvider  theme={theme}>
                                <Grid item xs style={{marginTop:40, marginLeft:-10}}>
                                    <AlertDialog/>
                                </Grid>
                                <Grid item xs>
                                    <Button style={{marginTop:40, marginLeft:10}} component={Link} variant="contained" to={`/editmonitoring/${this.state.id_tutoring}`} color="primary">
                                        Editar
                                    </Button>
                                </Grid>
                            </MuiThemeProvider>
                            </Grid>  : null}                         
                        </Grid>
                    
                    </Grid>
                    }
                </Grid>
            </Grid>
            <div>
                <Grid item style={{marginTop:150, marginLeft:-10}}> 
                    {this.state.isLoading ? <Spinner />:
                        <Grid container direction="column" style={{marginTop:-150, marginLeft:10}}>
                            <Grid item >
                                <h1>Monitoria</h1>
                            </Grid>
                            <Grid item>
                                <h3>Matéria:</h3>
                                <Typography>
                                    {this.state.tutoringName}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <h3>Tema:</h3>
                                <Typography>
                                    {this.state.tutoringTheme}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <h3>Descrição:</h3>
                                <Typography>
                                    {this.state.tutoringDescription}
                                </Typography>
                            </Grid> 
                        </Grid>
                    }
                </Grid>
            </div>
            <Grid container alignContent="center" justify="center" direction="row" spacing={24} alignItems="center" style={{marginTop: 25}}>
              <Grid item >
                {!this.state.user_liked?<MuiThemeProvider theme={theme}>
                    <Fab onClick={this.createLike} color="primary" aria-label="Edit" >
                        <Like/>
                    </Fab>
                </MuiThemeProvider>:
                <MuiThemeProvider theme={theme}>
                    <Fab onClick={this.deleteLike} color="secundary" aria-label="Edit" >
                        <Like/>
                    </Fab>
                    </MuiThemeProvider>}
              </Grid>
              <Grid item>
                    <a href={"https://t.me/" + texto} target="_blank"  rel="noopener noreferrer">{
                        <MuiThemeProvider theme={theme}>
                            <Fab color="primary" aria-label="Edit" >
                                <Logo/>
                            </Fab>
                        </MuiThemeProvider>}
                    </a>
              </Grid> 
            </Grid>
            <Grid container alignContent="center" justify="center" direction="row" spacing={24} alignItems="center" style={{marginTop: 25}}> 
                <Grid item>
                {this.state.total_likes !== 0?
                    <Link component="button" variant="body2" to={`/likeList/${this.state.id_tutoring}`}>
                        <h3>{this.state.total_likes} Curtida(s)</h3>
                    </Link>: 
                        <h3>{this.state.total_likes} Curtida(s)</h3>
                    }
                </Grid>
            </Grid>
        </div>
    );
  }
}

ExpandedCard = withRouter(ExpandedCard);
export default (ExpandedCard);