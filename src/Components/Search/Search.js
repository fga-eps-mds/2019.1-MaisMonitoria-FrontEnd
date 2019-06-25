import React, { Component } from 'react';
import { Grid} from '@material-ui/core' ;
import firebase from 'firebase';
import axios from 'axios';
import _ from 'lodash';

import '../Feed/feed.css'
import Card from '../Feed/Card';
import Tab from '../Tab/Tab';
import AppBar from './AppBarSearch';

const initialState = {
    expanded: false,
         data : []
};

class Search extends Component {

    constructor(props){
        super(props)
        this.state = initialState
    }  
     state = {        
         showWarning: false,
     }

    reset(){
        this.setState(initialState)
    }

    componentDidMount() {   
         firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
             if(!user){
                this.props.history.push('/');
            }
        })   
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
                      
            firebase.auth().currentUser.getIdToken().then(function(idToken){
                token["access_token"] = idToken;
                });
            axios.post(process.env.REACT_APP_GATEWAY+"/search_tutoring/", token)
            .then(res => {
                let person = res.data.results
                this.setState({data:person})
            });                                           
    }
    
  render() {
    return (
        <div style={{overflowX:'hidden'}} >
            <Grid container justify="center" alignItems="stretch">
                <AppBar changesearch={this.changesearch.bind(this)} search={this.state.search}/>
            </Grid>
            <Grid container justify="center" direction="column" alignItems="center" style={{paddingTop:80, paddingBottom:60}} spacing={8} >
                {_.map(this.state.data, (item, i) => {
                    return (
                        <Grid item key={i} lg={12} sm={12} container style={{paddingBottom:3, backgroundColor:'#eeeeee'}} >
                            <Card name_monitoring={item.name} matter={item.subject} 
                                   description={item.description} photo={item.monitor.photo} 
                                   monitorName={item.monitor.name} id_tutoring={item.id_tutoring_session}/>
                        </Grid>
                    );
                })}
            </Grid>
            <Tab ind={3}/>
        </div>
    );   
  }
}

export default Search;