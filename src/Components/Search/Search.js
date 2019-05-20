
import React, { Component } from 'react';
import { Grid,TextField } from '@material-ui/core' ;
import AppBar from './AppBarSearch';
import Paper from './PaperSearch';
import firebase from 'firebase';
import axios from 'axios';
import Card from '../Feed/Card';

const initialState = {
    expanded: false,
         data : []
};

class Search extends Component {

    constructor(props){
        super(props)
        this.state = initialState
    }
    reset(){
    
        this.setState(initialState)
    }
               
    
    changesearch(search) {
        
            this.setState({search});
            var token = {
                search: search,
            };
            if(!search ){
                setTimeout(function() { 
                this.reset()
            }.bind(this), 500)
            }
            else{
                firebase.auth().onAuthStateChanged(user =>{
                    this.setState({isSignedIn: !!user});
                    if(user){
                        firebase.auth().currentUser.getIdToken().then(function(idToken){
                            token["access_token"] = idToken;
                        });
                            axios.post(process.env.REACT_APP_GATEWAY+"/search_tutoring/", token)
                            .then(res => {
                                let person = res.data
                                this.setState({data:person})    
                            });         
                        }
                  });
            }
    }
    
   

  render() {
    return (
        <div style={{overflowX:'hidden'}} >
            <Grid container  justify="center" alignItems="stretch">
                <AppBar changesearch={this.changesearch.bind(this)} search={this.state.search}/>
                
            </Grid>
            <Grid container  justify="center" direction="column" alignItems="center" spacing="16" style={{ padding: 80 }}>
            {this.state.data.map(function(item, i){
                    return (
                        <Grid item key={i} lg={12} sm={12} container >
                            <Card name_monitoring={item.name} matter={item.subject} deion={item.description}/>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );   
  }
}

export default Search;