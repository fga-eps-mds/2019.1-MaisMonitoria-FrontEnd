
import React, { Component } from 'react';
import { Grid} from '@material-ui/core' ;
import AppBar from './AppBarSearch';
import firebase from 'firebase';
import axios from 'axios';

import Card from '../Feed/Card';
import '../Feed/feed.css'

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
    var photoUrl = this.state.photo

    if( photoUrl != null ){
        photoUrl = photoUrl.replace("api-monitoria","localhost")
      } else {
        photoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzaLMnex1QwV83TBQgxLTaoDAQlFswsYy62L3mO4Su-CMkk3jX"
      }

    return (
        <div style={{overflowX:'hidden'}} >
            <Grid container  justify="center" alignItems="stretch">
                <AppBar changesearch={this.changesearch.bind(this)} search={this.state.search}/>
            </Grid>
            <Grid container  justify="center" direction="column" alignItems="center" style={{paddingTop:80}} spacing={8} >
            {this.state.data.map(function(item, i){
                    return (
                        <Grid item key={i} lg={12} sm={12} container style={{paddingBottom:3}} style={{backgroundColor:'#eeeeee'}} >
                            <Card name_monitoring={item.name} matter={item.subject} 
                                   description={item.description} photo={item.monitor.photo} 
                                   monitorName={item.monitor.name} id_tutoring={item.id_tutoring_session}/>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );   
  }
}

export default Search;