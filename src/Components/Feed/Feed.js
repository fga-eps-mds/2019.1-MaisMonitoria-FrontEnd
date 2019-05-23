import React, { Component } from 'react';
import { Grid } from '@material-ui/core' ;
import AppBar from '../AppBar/AppBar.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import firebase from 'firebase';

import Card from './Card.js';
import ButtonSizes from '../GenericButtons/Add.js';
import './feed.css';


class TelaFeed extends Component {
    state =  {data : []}

    componentDidMount() {
        var token = {};

        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                });
                axios.post(process.env.REACT_APP_GATEWAY+"/all_tutoring/", token)
                    .then(res => {
                        const person = res.data
                        this.setState({data:person})
                    });
            }
          });
    }

  render() {  
    return (
        <div style={{overflowX:'hidden'}} className="FeedBackground">
            <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
                <AppBar/>    
            </Grid> 
            <div>
            <Grid container justify="center" direction="column" alignItems="center" spacing={8} style={{paddingTop:70}}>
                {this.state.data.map(function(item, i){
                    return (
                        <Grid item key={i} lg={12} sm={12} container style={{paddingBottom:3}} >
                            <Card name_monitoring={item.name} matter={item.subject} 
                                   description={item.description} photo={item.monitor.photo} 
                                   monitorName={item.monitor.name} id_tutoring={item.id_tutoring_session} />
                        </Grid>
                    );
                })}
            </Grid>
            </div>
            <div>    
                <Grid container>
                    <Grid>
                        <ButtonSizes component={Link} to="/Profile"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );   
  }
}

export default TelaFeed;