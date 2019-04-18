import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import BottomBar from '../Tab/Tab.js';
import AppBar from '../AppBar/AppBar.js';
import Pp from '../../Assets/img/Pp.png';
import Course from './Course.js';


class EditProfile extends Component {
    
  render() {
      
    return (
    
        <div >
       
            <Grid container   justify="center" alignItems="stretch">
                <AppBar/>
            </Grid>    
            <Grid container  alignContent="center" justify="center" direction="column" alignItems="center" spacing="8" style={{ padding: 100 }}>
                <Grid item auto-md > 
                <img src={Pp} alt="pp" width="120" height="120"/>
                </Grid>
                <Grid item auto-md > 
                <Button variant="outlined" size="small" color="primary">
                    Alterar foto
                </Button>
                </Grid> 
                <Grid item md-auto>
                    <TextField
                    id="nomeTextField"
                    label="Nome"
                    margin="normal"
                    
                    />
                </Grid>
                <Grid item md-auto>
                    <TextField
                    id="emailTextField"
                    label="Email"
                    margin="normal"
                    type="email"
                    name="email"
                    autoComplete="email"
                    
                    />
                </Grid>
                <Grid item md-auto>
                    <Course
                    />
                </Grid>
                <Grid item md-auto>
                    <TextField
                    id="telefone    TextField"
                    label="Telefone"
                    margin="normal"
                    
                    
                    />
                </Grid>
                <Grid item> 
                     <Button variant="outlined" color="primary">
                        Alterar
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

export default EditProfile;
