import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core' ;
import Tab from '../Tab/Tab.js';
import AppBar from '../AppBar/AppBar.js';
import Card from './Card.js';
import Add from '../GenericButtons/Add.js';
import './feed.css';



class TelaFeed extends Component {
  render() {
      
    return (
    
        <div >
       
            <Grid container   justify="center" alignItems="stretch">
                <AppBar/>
                
            </Grid> 

            <Grid container  justify="center" direction="column" alignItems="center" spacing="8" style={{ padding: 80 }}>
                <Grid item xs={12} sm container>
                    <Card/>
                </Grid>
                <Grid item xs={12} sm container>
                    <Card/>
                </Grid>
                <Grid item xs={12} sm container>
                    <Card/>
                </Grid>
                <Grid item xs={12} sm container>
                    <Card/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid>
                    <Add/>
                    </Grid>
                </Grid>
            <Grid container  >                
                <Grid >
                <Tab>
                </Tab>
                </Grid>
            
            </Grid>
          
        </div>
    
    );   
  }
}

export default TelaFeed;