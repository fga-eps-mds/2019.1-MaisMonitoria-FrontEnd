import React, { Component } from 'react';
import { Grid} from '@material-ui/core' ;
import BottomBar from '../BottomBar/BottomBar.js';
import AppBar from './AppBar.js';
import Pesquisa from './pesquisa.js';
import Paper from './paper.js';


class CadastrarMonitoria extends Component {
    
  render() {
      
    return (
    
        <div >
       
            <Grid container   justify="center" alignItems="stretch">
                <AppBar/>
            </Grid>    
            <Grid container  alignContent="center" justify="stretch" direction="column" alignItems="center" spacing="16" style={{ padding: 60 }}>
                
                <Grid item md-auto >
                    <Pesquisa/>
                </Grid>
                <Grid item md-auto alignItems="center">
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

export default CadastrarMonitoria;