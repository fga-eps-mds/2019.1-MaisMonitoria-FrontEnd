import React from 'react';
import { Grid, Typography,Button } from "@material-ui/core";
import firebase from 'firebase';
import axios from 'axios';
import AppBar from './AppBarWithBack';
import './ExpandedCard.css'
import Spinner from '../Loader/Spinner';

import { ReactComponent as Logo } from '../../Assets/svg/telegram.svg';
import { ReactComponent as Like } from '../../Assets/svg/like.svg';
import Fab from '@material-ui/core/Fab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Link } from 'react-router-dom';

import {withRouter} from 'react-router-dom';


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
        isLoading: false
    }

    componentDidMount() {
        var token = {};
        var idTutoring = this.props.match.params.id_tutoring;
        this.setState({id_tutoring:idTutoring});
        this.setState({ isLoading: true });
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
            if(user){
                this.setState({id_user:user.uid})
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                    token["id_tutoring_session"] = idTutoring;
                });
                
                axios.post(process.env.REACT_APP_GATEWAY+"/get_tutoring/", token)
                    .then(res => {
                        const person = res.data;
                        this.setState({tutoringName:person["name"], tutoringTheme:person["subject"], tutoringDescription:person["description"],
                                      monitorName: person.monitor["name"], photo:person.monitor["photo"], telegram:person.monitor["telegram"],
                                        id_monitor:person.monitor.user_account_id})          
                    });
            }else{
                this.props.history.push('/');
            }
            this.setState({ isLoading: false });
        });
          
    }
        
  render() {
    var texto =  this.state.telegram;
    var er = texto;
    texto = er.replace('@','');
        
    var photoUrl = this.state.photo;
    if( photoUrl != null ){
        photoUrl = photoUrl.replace("api-monitoria","localhost")
      } else {
        photoUrl = "https://cdn-eleicoes.gazetadopovo.com.br/fotos/sao-paulo/deputado-federal/batore-1444.jpg"
      }

    return (
        <div className='div'>
            
            <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
               <AppBar/>    
            </Grid>            
            <Grid container justify="center" direction="row" style={{paddingTop:80, paddingLeft:15,paddingBottom:15}} className="teste" >
                {(this.state.id_monitor != this.state.id_user)? 
                <Grid item>                        
                    <Link to="/ProfileMonitor"><img src={photoUrl} style={{width:140, height:140}}></img></Link>
                </Grid>: null} 
                {(this.state.id_monitor === this.state.id_user)? 
                <Grid item>                        
                    <img src={photoUrl} style={{width:140, height:140}}></img>
                </Grid>: null} 
                <Grid item style={{marginTop:50, marginLeft:25}} >
                    {this.state.isLoading ? <Spinner />:    
                    <Grid>
                        <Grid container justify="center" direction="column" alignItems="center" alignContent="center" style={{marginTop:-50, marginLeft:-25}}>
                            <Grid item style={{marginTop:50}} style={{marginLeft:50}} >
                                <h1>Monitor</h1>
                            </Grid>
                            <Grid item>
                                <Typography style={{marginLeft:50}}>
                                    Nome: {this.state.monitorName}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" direction="column" alignItems="center" alignContent="center" >
                        {(this.state.id_monitor != this.state.id_user)? 
                            <MuiThemeProvider  theme={theme}>
                                <Button style={{marginTop:40,marginLeft:50}} component={Link} variant="contained" to={`/ProfileMonitor/`} color="primary">
                                    Ver perfil
                                </Button>
                            </MuiThemeProvider>: null} 
                        {(this.state.id_monitor === this.state.id_user)? 
                            <MuiThemeProvider  theme={theme}>
                                <Button style={{marginTop:40,marginLeft:50}} component={Link} variant="contained" to={`/editmonitoring/${this.state.id_tutoring}`} color="primary">
                                    Editar
                                </Button>
                            </MuiThemeProvider>: null}                           
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
                <MuiThemeProvider theme={theme}>
                    <Fab color="primary" aria-label="Edit" >
                        <Like/>
                    </Fab>
                </MuiThemeProvider>
              </Grid>
              <Grid item>
                    <a href={"https://"+"t.me/" + texto}>{
                        <MuiThemeProvider theme={theme}>
                            <Fab color="primary" aria-label="Edit" >
                                <Logo/>
                            </Fab>
                        </MuiThemeProvider>}
                    </a>
              </Grid>
            </Grid>
        </div>
    );
  }
}

ExpandedCard = withRouter(ExpandedCard);
export default (ExpandedCard);