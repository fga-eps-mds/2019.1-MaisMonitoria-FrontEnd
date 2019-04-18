import React, { Component } from 'react';
import { Grid} from '@material-ui/core' ;
import BottomBar from '../Tab/Tab.js';
import AppBar from './AppBar.js';
import Paper from './paper.js';


class Search extends Component {
    
  render() {
      
    return (
    
        <div >
       
            <Grid container  justify="center" alignItems="stretch">
                <AppBar/>
            </Grid>    
            <Grid container  alignContent="center" justify="stretch" direction="column" alignItems="center" spacing="16" style={{ padding: 80 }}>
                
               
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