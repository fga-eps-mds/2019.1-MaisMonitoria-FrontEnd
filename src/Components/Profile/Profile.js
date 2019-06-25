import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core' ;
import AppBarProfile from '../AppBar/AppBarProfile';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Spinner from '../Loader/Spinner';

import ProfileTab from '../ProfileTab/ProfileTab';
import Tab from '../Tab/Tab';

import './Profile.css';
import _ from 'lodash';


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
        maxWidth: 1000,
        },
      
      
  
  });

class Profile extends Component {

    state = { 
        
        monitorName:'',
        monitorCourse: '',
        monitorEmail: '',
        tutoring: [],
        likes: [],
        monitorPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaLMnex1QwV83TBQgxLTaoDAQlFswsYy62L3mO4Su-CMkk3jX',
        showWarning: false,
        isLoading: false
    }
    
    componentDidMount() {
        let userData = {};
        let token = {}
        
        this.setState({ isLoading: true });
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                    
                })
              
                axios.post(process.env.REACT_APP_GATEWAY+"/get_user/", token).then(user=>{
                    userData = user.data;

                    if(userData['course'] === 'SOFTWARE' || userData['course'] === 'ENERGIA' ){
                        userData['course'] = 'ENGENHARIA DE ' + userData['course'];
                    }
                    else if(userData['course'] === 'AERO'){
                        userData['course'] = 'ENGENHARIA AEROESPACIAL';

                    }
                    else if(userData['course'] === 'AUTOMOTIVA' || userData['course'] === 'ELETRONICA'){
                        userData['course'] = 'ENGENHARIA ' + userData['course'];
                    }
                    this.setState({monitorName:userData["name"], monitorCourse:userData["course"], tutoring:userData["monitoring"], photo:userData["photo"], likes:userData["liked_tutoring_sessions"], teste:userData["liked_tutoring_sessions.monitor.ph"]}) 
                    
                });  
                this.setState({ isLoading: false });
            }else{
                
                this.props.history.push('/');
            }     
        })
    }

    render(){

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
                        <AppBarProfile/>    
                    </Grid>
                </div> 
                <div className={classes.root}>   
                    <Grid container  direction="row" justify="flex-start" alignItems="flex-start" spacing={24}>
                        <Grid item >
                            <img className={classes.perfil} src={photoUrl} alt=''></img>
                        </Grid>
                        <Grid item xs>
                            {this.state.isLoading ? <Spinner />:
                                <Grid container justify={'flex-start'} direction={'column'} alignContent={'flex-start'} alignItems={'flex-start'} spacing={16}  style={{paddingTop:80}} >
                                    <Grid item>                              
                                        <h3>{this.state.monitorName}</h3>  
                                    </Grid>
                                    <Grid item>
                                        <h4>{this.state.monitorCourse}</h4>
                                    </Grid>
                                    <Grid item>
                                        <MuiThemeProvider theme={theme}>
                                            <Button variant="contained" component={Link} to="/EditProfile"  color="primary">
                                                Editar perfil
                                            </Button>
                                        </MuiThemeProvider>
                                    </Grid>
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </div>
                <div className="profileBackground">
                    <Grid item style = {{marginTop:10}} >
                    {this.state.isLoading ? <Spinner />:
                        <Grid container justify={'center'} alignContent={'center'} alignItems={'center'} >
                        <Grid item xs={12} style={{marginTop:10, paddingBottom:40}} className="profileBackground">
                            <ProfileTab
                                tutoring= {_.map(this.state.tutoring, item  => ({ ...item,  photoUrl}))}
                                likes={_.map(this.state.likes, item => ({ ...item, photoUrl}))}
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