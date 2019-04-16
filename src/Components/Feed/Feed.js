import React, { Component } from 'react';
import { Grid, Button, } from '@material-ui/core' ;
import BottomBar from '../BottomBar/BottomBar.js';
import AppBar from '../AppBar/AppBar.js';
import Card from './Card.js';

class TelaFeed extends Component {
    
  render() {
      
    return (
    
        <div >
       
            <Grid container   justify="center" alignItems="stretch">
                <AppBar/>
            </Grid>    
            <Grid container  justify="center" direction="column" alignItems="center" spacing="8" style={{ padding: 80 }}>
                <Grid item md-auto >
                    <Card/>
                </Grid>
                <Grid item md-auto >
                    <Card/>
                </Grid>
                <Grid item md-auto >
                    <Card/>
                </Grid>
                <Grid item md-auto >
                    <Card/>
                </Grid>
            </Grid>
            <Grid container  > 
                
                <Grid >
                <BottomBar>
                </BottomBar>
                </Grid>
            </Grid>
          
        </div>
    
    );   
  }
}

export default TelaFeed;