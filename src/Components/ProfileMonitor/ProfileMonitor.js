import React, { Component } from 'react';
import { Grid} from '@material-ui/core' ;
import AppBarProfile from '../Feed/AppBarWithBack';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import firebase from 'firebase';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Spinner from '../Loader/Spinner';
import { ReactComponent as Logo } from '../../Assets/svg/telegram.svg';
import Fab from '@material-ui/core/Fab';
import _ from 'lodash';

import ProfileTab from '../ProfileMonitor/ProfileTabMonitor';
import Tab from '../Tab/Tab';


const theme = createMuiTheme({
    palette: {
      primary: { main: '#44a1f2' },
      secondary: { main: '#ff0000' },
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
  const styles = () => ({
   
  
    perfil: {
      width:120,
      height:120,
      marginLeft: 10,
      marginTop: 70,
      marginBottom: 5,
      borderRadius: 70,
    },
    
    root: {
          width: '100%',
          maxWidth: 500,
        },
    fab:{
    width:1,
    height:1,
    }
      
  
  });

class Profile extends Component {

    state = { 
        description:'',
        telegram:'',
        monitorName:'',
        monitorCourse: '',
        monitorEmail: '',
        tutoring: [],
        likes: [],
        monitorPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaLMnex1QwV83TBQgxLTaoDAQlFswsYy62L3mO4Su-CMkk3jX',
        showWarning: false,
        isLoading: false,
        id_monitor: '',
        id_tutoring_session:''
    }
    
    componentDidMount() {
        var token = {}
        var idMonitor = this.props.match.params.id_monitor;
        
        if(this.props.id_tutoring){
            this.setState({id_tutoring_session:this.props.id_tutoring});
        }  
             
        this.setState({id_monitor:idMonitor});
        this.setState({ isLoading: true });
        
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
            if(user){
                this.setState({id_user:user.uid})
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                    token["monitor_id"] = idMonitor;
                });
              
                axios.post(process.env.REACT_APP_GATEWAY+"/get_monitor/", token)
                .then(res => {
                    const person = res.data;
                    if(person['course'] === 'SOFTWARE' || person['course'] === 'ENERGIA' ){
                        person['course'] = 'ENGENHARIA DE ' + person['course'];
                    }
                    else if(person['course'] === 'AERO'){
                        person['course'] = 'ENGENHARIA AEROESPACIAL';

                    }
                    else if(person['course'] === 'AUTOMOTIVA' || person['course'] === 'ELETRONICA'){
                        person['course'] = 'ENGENHARIA ' + person['course'];
                    }
                    
                    this.setState({monitorName:person["name"], monitorCourse:person["course"],
                                photo:person["photo"], tutoring:person["monitoring"], description:person["description"], telegram:person["telegram"], id_monitor:person.user_account_id})          
                
                });  
                this.setState({ isLoading: false });
            }else{
                
                this.props.history.push('/');
            }     
        })
    }

    render(){
        var texto =  this.state.telegram;
        var er = texto;
        texto = er.replace('@','');

        const { classes } = this.props;
        var photoUrl = this.state.photo

        if( photoUrl != null && window.location.hostname === 'localhost'){
            photoUrl = photoUrl.replace("api-monitoria","localhost")
          } else if(photoUrl === null){
            photoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaLMnex1QwV83TBQgxLTaoDAQlFswsYy62L3mO4Su-CMkk3jX"
          }
        return(
            <div style={{overflowX:'hidden'}}>
                <div style={{overflowX:'hidden'}} >
                    <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
                    {this.state.id_tutoring_session? 
                        <AppBarProfile router={`/likeList/${this.state.id_tutoring_session}`}/>
                        :
                        <AppBarProfile/>
                    }    
                    </Grid>
                </div> 
                <div className={classes.root}>   
                    <Grid container justify={'flex-start'} direction={'row'} alignContent={'center'} spacing={24} alignItems={'center'}>
                        <Grid item>
                            <img className={classes.perfil} src={photoUrl} alt='' ></img>
                        </Grid>
                        <Grid item xs>
                            {this.state.isLoading ? <Spinner />:
                                <Grid container justify={'flex-start'} direction={'column'} alignContent={'flex-start'} alignItems={'flex-start'} spacing={16}  style={{paddingTop:80}} >
                                    <Grid item>
                                        <Grid container direction={'row'} spacing={16} justify="center" alignItems="center" >
                                            <Grid item xs>                             
                                                <h2>{this.state.monitorName}</h2>
                                            </Grid>
                                            <Grid item > 
                                                <a href={"https://t.me/" + texto} target="_blank"  rel="noopener noreferrer">{
                                                    <MuiThemeProvider theme={theme}>
                                                        <Fab size="small" color="primary" aria-label="Edit" >
                                                            <Logo/>
                                                        </Fab>
                                                    </MuiThemeProvider>}
                                                </a>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <h3>{this.state.monitorCourse}</h3>
                                    </Grid>
                                    <Grid item>
                                    <h3>Descrição:</h3>{this.state.description}
                                    </Grid>
                                </Grid>
                            }
                        </Grid>      
                    </Grid>                 
                </div>
                <div className="profileBackground">
                    <Grid item style = {{marginTop:20}} >
                    {this.state.isLoading ? <Spinner />:
                        <Grid container justify={'center'} alignContent={'center'} alignItems={'center'} >
                        <Grid item xs={12} style={{marginTop:10, paddingBottom:40}} className="profileBackground">
                            <ProfileTab
                                tutoring= {_.map(this.state.tutoring, item  => ({ ...item,  photoUrl}))}
                            />
                        </Grid>
                        <Tab ind={1}/>
                        </Grid>
                    }
                    </Grid>
                 </div>
            </div>           
        )
                    
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Profile);