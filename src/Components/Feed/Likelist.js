import React from 'react';
import { Grid } from "@material-ui/core";
import firebase from 'firebase';
import axios from 'axios';
import AppBar from './AppBarWithBack';
import './ExpandedCard.css'
import { createMuiTheme } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import Card from '../Feed/CardLike';

class LikeList extends React.Component {
 
    state={
      person: [],
      id_user:'',
      likes:[],
      total_likes:0,
      id:''
    }

    componentDidMount=  async () =>{
      var token = {};
      var idTutoring = this.props.match.params.id_tutoring;
      await firebase.auth().onAuthStateChanged(user =>{
        this.setState({isSignedIn: !!user});
            if(user){
                this.setState({id_user:user.uid})
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                    token["id_tutoring_session"] = idTutoring;
                });
                axios.post(process.env.REACT_APP_GATEWAY+"/get_tutoring/", token)
                    .then(res => {
                      this.setState({person:res.data});
                      this.setState({ likes:this.state.person.likes,
                      total_likes:this.state.person.total_likes,id:idTutoring});
                    });
                   
            }else{
                this.props.history.push('/');
            }
        });  
    }

  render() {
    return (
        <div className='div'>
          <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
            <AppBar router={`/expandedCard/${this.props.match.params.id_tutoring}`}/>    
          </Grid>
          <Grid justify="center" direction="column" alignItems="center"  style={{paddingTop:70,marginTop:10, paddingBottom:40}}> 
            <h1>{this.state.likes.map(function(item, i){
              return (
                <Grid item key={i} lg={12} sm={12} container style={{paddingBottom:3}} >
                    <Card name_user={item.user_that_likes.name}photo={item.user_that_likes.photo} user ={item.user_that_likes.user_account_id}  id_tutoring ={this.state.id} />
                </Grid>
              );
            },this)}
            </h1>
          </Grid>  
       </div>
    );
  }
}

LikeList = withRouter(LikeList);
export default (LikeList);