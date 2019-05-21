import React from 'react';
import { Grid, Typography,Button } from "@material-ui/core";
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import axios from 'axios';
import AppBar from '../AppBar/AppBar.js';
import './ExpandedCard.css'
class ExpandedCard extends React.Component {
    
    state = {
        tutoringName: '',
        tutoringDescription: '',
        tutoringTheme: '',
        monitorName: '',
        photo: '',
    }

    componentDidMount() {
        var token = {};
        var idTutoring = this.props.match.params.id_tutoring;
        
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                    token["id_tutoring_session"] = idTutoring;
                });
                
                axios.post(process.env.REACT_APP_GATEWAY+"/get_tutoring/", token)
                    .then(res => {
                        const person = res.data
                        console.log(person)
                        this.setState({tutoringName:person["name"], tutoringTheme:person["subject"], tutoringDescription:person["descirption"],
                                      monitorName: person.monitor["name"], photo:person.monitor["photo"]}) 
                        
                    });
            }
          });
      
          
    }
  render() {
    var photoUrl = this.state.photo;
    if( photoUrl != null ){
        photoUrl = photoUrl.replace("api-monitoria","localhost")
      } else {
        photoUrl = "https://cdn-eleicoes.gazetadopovo.com.br/fotos/sao-paulo/deputado-federal/batore-1444.jpg"
      }

    return (
        <div style={{overflowX:'hidden'}}>
            
            <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
                <AppBar/>    
            </Grid>
            <Grid container justify="flex-center" direction="row" style={{paddingTop:80, paddingLeft:15,paddingBottom:15}} className="teste" >
                <Grid item>                            
                    <img src={photoUrl} style={{width:140, height:140}}></img>
                </Grid>
                <Grid item>    
                    <Grid container justify="center" direction="column" alignItems="center" alignContent="center">
                        <Grid item style={{marginTop:50}} style={{marginLeft:50}} >
                            <h1>Monitor</h1>
                        </Grid>
                        <Grid item>
                            <Typography style={{marginLeft:50}}>
                                Nome: {this.state.monitorName}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
                <Grid item>
                    <h2>Monitoria</h2>
                </Grid>
        </div>
    );
  }
}


export default (ExpandedCard);