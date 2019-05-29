import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core' ;
import AppBarProfile from '../AppBar/AppBarProfile';
import Card from '../Feed/Card';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import firebase from 'firebase';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import AppBar from '../AppBar/AppBar';
import ProfileTab from '../ProfileTab/ProfileTab';

import './Profile.css';
import SimpleModal from '../SimpleModal';
import SnackbarWarning from '../SimpleModal/SnackBarsWarning';



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
    }
  
  });

class Profile extends Component {

    state = { 
    
        monitorName:'',
        monitorCourse: '',
        monitorEmail: '',
        tutoring: [],
        monitorPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaLMnex1QwV83TBQgxLTaoDAQlFswsYy62L3mO4Su-CMkk3jX',
        showWarning: false
        
    }
    

    componentDidMount() {
        let userData = {};
        let token = {}
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                    console.log(user);
                })
              
                axios.post(process.env.REACT_APP_GATEWAY+"/get_user/", token).then(user=>{
                    userData = user.data;
                    this.setState({monitorName:userData["name"], monitorCourse:userData["course"], tutoring:userData["monitoring"], photo:userData["photo"]}) 
                });  
            }else{
                
                this.props.history.push('/');
            }     
        })
    }

    render(){

        const { classes } = this.props;
        var photoUrl = this.state.photo

        if( photoUrl != null ){
            photoUrl = photoUrl.replace("api-monitoria","localhost")
          } else {
            photoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaLMnex1QwV83TBQgxLTaoDAQlFswsYy62L3mO4Su-CMkk3jX"
          }
        return(
            <div style={{overflowX:'hidden'}}>
                {/* {this.state.showWarning? <SnackbarWarning warning={"Faça o login para acessar"} router={""}/>:null} */}
                <div style={{overflowX:'hidden'}} >
                    <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
                        <AppBarProfile/>    
                    </Grid>
                </div> 
                <div>   
                    <Grid container justify={'flex-start'} direction={'row'} alignContent={'center'} spacing={24} alignItems={'center'}>
                        <Grid item>
                            <img className={classes.perfil} src={photoUrl} ></img>
                        </Grid>
                        <Grid item>
                            <Grid container justify={'flex-start'} direction={'column'} alignContent={'flex-start'} alignItems={'flex-start'} spacing={24}  style={{paddingTop:80}} alignItems={'center'}>
                                <Grid item>
                                    Name: {this.state.monitorName}
                                </Grid>
                                <Grid item>
                                    Curso: {this.state.monitorCourse}
                                </Grid>
                                <Grid item>
                                    <MuiThemeProvider theme={theme}>
                                        <Button variant="contained" component={Link} to="/EditProfile"  color="primary">
                                            Editar perfil
                                        </Button>
                                    </MuiThemeProvider>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div className="profileBackground">
                    <Grid container justify={'center'} alignContent={'center'} alignItems={'center'} >
                        <Grid item xs={12} style={{marginTop:10}} className="profileBackground">
                            <ProfileTab/>
                        </Grid>
                        {this.state.tutoring.map(function(item, i){
                            return (
                                <Grid item key={i} lg={12} sm={12} container >
                                    <Card name_monitoring={item.name} matter={item.subject} photo={photoUrl}
                                           description={item.description} id_tutoring={item.id_tutoring_session}/>
                                </Grid>
                            );
                        })}
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