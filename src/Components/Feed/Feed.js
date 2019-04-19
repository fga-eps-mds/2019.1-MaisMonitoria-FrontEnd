import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core' ;
import Tab from '../Tab/Tab.js';
import AppBar from '../AppBar/AppBar.js';
import Card from './Card.js';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import Add from '../GenericButtons/Add.js';





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
            <Grid container  justify="center" direction="column" alignItems="center">
                <Add/>
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