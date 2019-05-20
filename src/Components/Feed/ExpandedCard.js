import React from 'react';
import { Grid, Typography,Button } from "@material-ui/core";
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import axios from 'axios';

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
                <div>
            <Grid container justify="center" alignContent="center" direction="column">
                <Grid item alignContent="center">
                    <h1>{this.state.tutoringName}</h1>
                </Grid>
                <Grid item>
                    <img style={{width:120, height:120}} src={photoUrl}></img>
                </Grid>
                <Grid item>
                    <Typography>
                        Descrição: {this.state.tutoringName}
                    </Typography>
                </Grid>
                <Grid item>  
                   
                </Grid>
            </Grid>
            <Grid container alignContent="center" justify="center" direction="row" spacing="24" alignItems="center" style={{marginTop: 25}}>
              <Grid item >
                  <Button  variant="outlined" color="primary" >
                  Pedir monitoria
                  </Button>
              </Grid>
                <Grid item>
                    <Button  variant="outlined" component={Link} to="/Feed" color="primary" >
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
  }
}


export default (ExpandedCard);