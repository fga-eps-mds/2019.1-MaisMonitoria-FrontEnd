import React, { Component } from 'react';
import { Grid } from '@material-ui/core' ;
import AppBar from '../AppBar/AppBar.js';
import { Link } from 'react-router-dom';
import axios from 'axios';
import firebase from 'firebase';
import Spinner from '../Loader/Spinner';

import Card from './Card.js';
import ButtonSizes from '../GenericButtons/Add.js';
import './feed.css';
import Tab from '../Tab/Tab';

import {withRouter} from 'react-router-dom';
import _ from 'lodash';


class TelaFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            showWarning: false,
            isLoading: false,
            next: '',
            page : 2,
            endlist:false,
            aux : false
        };

        window.onscroll = () => {         
          if (document.documentElement.scrollHeight-document.documentElement.scrollTop===document.documentElement.clientHeight) {
            this.loadMore()
          }
        };
      }
    
    loadMore(){
        const next = this.state.next;
        if(next != null){
            this.setState({ aux: true });
            var page= this.state.page;
            var token = {
                page:''
            };
            firebase.auth().onAuthStateChanged(user =>{
                this.setState({isSignedIn: !!user});
                if(user){
                    firebase.auth().currentUser.getIdToken().then(function(idToken){
                        token["access_token"] = idToken;
                    });
                    token["page"]= this.state.page;
                    axios.post(process.env.REACT_APP_GATEWAY+"/all_tutoring/", token)
                        .then(res => {
                            const prox = res.data.next;
                            const person = res.data.results;
                            this.setState({data:[...this.state.data,...person],next:prox});
                            if(prox!= null){
                                page= page +1;
                                this.setState({page:page, aux: false});
                            }
                            else{
                                this.setState({endlist:true, aux: false})
                            }
                        });
                }
                else{
                    this.props.history.push('/');
                }
            });
        }
      };

    componentDidMount() {
        var token = {
            page:''
        };
        this.setState({ isLoading: true });
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                });
                axios.post(process.env.REACT_APP_GATEWAY+"/all_tutoring/", token)
                    .then(res => {
                        const pages = res.data.next;
                        const ante = res.data.previous;
                        const person = res.data.results;
                        this.setState({data:person,next:pages,previous:ante});
                    });
                this.setState({ isLoading: false });
            }
            else{
                this.props.history.push('/');
            }
        });
    }
   
  render() {  
    return (     
        <div style={{overflowX:'hidden'}} className="FeedBackground">
            <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
                <AppBar />    
            </Grid> 
            <div>
                <Grid container justify="center" direction="column" alignItems="center" spacing={8} style={{paddingTop: 46, marginTop:10, paddingBottom:50}}>
                    {_.map(this.state.data, (item, i) => {
                        return (
                            <Grid item key={i} lg={12} sm={12} container style={{paddingBottom:2}} >
                                <Card name_monitoring={item.name} matter={item.subject} 
                                    description={item.description} photo={item.monitor.photo} 
                                    monitorName={item.monitor.name} id_tutoring={item.id_tutoring_session} />
                            </Grid>
                        );
                    })}
                    {!this.state.isLoading && this.state.aux?<Spinner />:null}
                    {this.state.endlist?<h4>Não há mais monitorias!</h4>:null} 
                </Grid>
                <Tab ind={0}/>
            </div>
            <Grid item style={{marginTop:225}}>
                {this.state.isLoading ? <Spinner />:
                    <div>
                        <Grid container style={{marginTop:-225}}>
                            <Grid>
                                <ButtonSizes component={Link} to="/Profile"/>
                            </Grid>
                        </Grid>
                    </div>
                }
            </Grid>
        </div>
        
    );   
  }
}


export default withRouter(TelaFeed);