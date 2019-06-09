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
import PropTypes from 'prop-types';
import _ from 'lodash';


class TelaFeed extends Component {
    state =  {
        data : [],
        showWarning: false,
        isLoading: false
    }

    componentDidMount() {
        var token = {};

        this.setState({ isLoading: true });
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                });
                axios.post(process.env.REACT_APP_GATEWAY+"/all_tutoring/", token)
                    .then(res => {
                        const person = res.data.results
                        this.setState({data:person})
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
                <AppBar/>    
            </Grid> 
            <div>
                <Grid container justify="center" direction="column" alignItems="center" spacing={8} style={{paddingTop:70,marginTop:10, paddingBottom:50}}>
                    {_.map(this.state.data, (item, i) => {
                        return (
                            <Grid item key={i} lg={12} sm={12} container style={{paddingBottom:3}} >
                                <Card name_monitoring={item.name} matter={item.subject} 
                                    description={item.description} photo={item.monitor.photo} 
                                    monitorName={item.monitor.name} id_tutoring={item.id_tutoring_session} />
                            </Grid>
                        );
                    })}
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
TelaFeed.propTypes = {
    warning: PropTypes.bool.isRequired,
  };


export default withRouter(TelaFeed);