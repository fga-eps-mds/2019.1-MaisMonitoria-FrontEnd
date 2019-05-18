import React, { Component } from 'react';
import { Grid,TextField } from '@material-ui/core' ;
import AppBar from './AppBarSearch';
import Paper from './PaperSearch';
import firebase from 'firebase';
import axios from 'axios';
import Card from '../Feed/Card';


class Search extends Component {
    state =  {expanded: false,data : [],pesquisa:''}
    
    handleChange(e){
        const title = e.target.value;
        var token = {
            search: title,
        };
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                });
                axios.post(process.env.REACT_APP_GATEWAY+"/search_tutoring/", token)
                    .then(res => {
                        const person = res.data
                        this.setState({data:person})
                        console.log(this.state.data);
                    });
            }
          });
    }

  render() {
    console.log("renderizou");
    return (
        <div style={{overflowX:'hidden'}} >
            <Grid container  justify="center" alignItems="stretch">
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
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