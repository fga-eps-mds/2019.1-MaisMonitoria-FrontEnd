import React, { Component } from 'react';
import { Grid} from '@material-ui/core' ;
import AppBar from './AppBarSearch';
import Paper from './PaperSearch';


class Search extends Component {
    
  render() {
      
    return (
        <div >
            <Grid container  justify="center" alignItems="stretch">
                <AppBar/>
            </Grid>    
            <Grid container  justify="center" direction="column" alignItems="center" spacing="16" style={{ padding: 80 }}>
                <Grid item >
                    <Paper/>
                </Grid>
            </Grid>
        </div>
    );   
  }
}

export default Search;