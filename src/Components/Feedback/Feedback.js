import React, { Component } from 'react';
import { Grid, Button} from '@material-ui/core' ;

import BottomBar from '../Tab/Tab.js';
import AppBar from '../AppBar/AppBar.js';
import Pp from '../../Assets/img/Pp.png';
import Mencao from './Mention.js';



class Feedback extends Component {
    
  render() {
      
    return (
    
        <div >
       
            <Grid container   justify="center" alignItems="stretch">
                <AppBar/>
            </Grid>    
            <Grid container  alignContent="center" justify="center" direction="column" alignItems="center" spacing="24" style={{ padding: 100 }}>
                <Grid item auto-md > 
                <img src={Pp} alt="pp" width="120" height="120"/>
                </Grid>
                <Grid item md-auto>
                    <p>Monitor: Lucas Alexandre</p>
                </Grid>
                <Grid item md-auto>
                    <p>Tema: Cálculo 1</p>
                </Grid>
                <Grid item md-auto>
                    <p>Data: 14/04/2019</p>
                </Grid>
                <Grid item md-auto>
                    <Mencao/>
                </Grid>
                <Grid item> 
                     <Button variant="outlined" color="primary">
                        Avaliar
                    </Button>
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

export default Feedback;
