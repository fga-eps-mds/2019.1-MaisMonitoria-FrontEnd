import React, { Component } from 'react';
import { Grid} from '@material-ui/core' ;
import BottomBar from '../BottomBar/BottomBar.js';
import AppBar from './AppBar.js';
import Search from './Search.js';
import Paper from './paper.js';


class Search extends Component {
    
  render() {
      
    return (
    
        <div >
       
            <Grid container   justify="center" alignItems="stretch">
                <AppBar/>
            </Grid>    
            <Grid container  alignContent="center" justify="stretch" direction="column" alignItems="center" spacing="16" style={{ padding: 60 }}>
                
               
                <Grid item md-auto>
                    <Paper/>
                </Grid>
                <Grid item md-auto>
                    <Paper/>
                </Grid>
                <Grid item md-auto>
                    <Paper/>
                </Grid>
                <Grid item md-auto>
                    <Paper/>
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

export default Search;