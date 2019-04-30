import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core' ;
import AppBar from '../AppBar/AppBar.js';
import Card from './Card.js';
import ButtonSizes from '../GenericButtons/Add.js';
import { Link } from 'react-router-dom';
import './feed.css';
import axios from 'axios';
import firebase from 'firebase';


class TelaFeed extends Component {
    state =  {expanded: false,data : []}

    componentDidMount() {
        var token = {};

        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                });
                
                axios.post("http://localhost:8000/all_tutoring/", token)
                    .then(res => {
                        const person = res.data
                        this.setState({data:person})
                    }).catch(error=>{
                        console.log("error");
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
            <Grid container justify="center" direction="column" alignItems="center" spacing="8" style={{paddingTop:70}}>
                {this.state.data.map(function(item, i){
                    return (
                        <Grid item key={i} lg={12} sm={12} container >
                            <Card name_monitoring={item.name} matter={item.subject} deion={item.description}/>
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