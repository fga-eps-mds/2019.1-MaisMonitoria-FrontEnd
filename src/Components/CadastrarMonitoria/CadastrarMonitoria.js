import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import BottomBar from '../BottomBar/BottomBar.js';
import AppBar from '../AppBar/AppBar.js';


class CadastrarMonitoria extends Component {
  render() {
    return (
    
        <div>
            <Grid container  dirdirection="column" justify="center" alignItems="stretch" spacing="16">
                <AppBar/>
            </Grid>    
            <Grid container  alignContent="center" justify="center" direction="column" alignItems="center" spacing="16">
            
                <Grid item md-auto>
                    <TextField
                    id="temaTextField"
                    label="Tema"
                    margin="normal"
                    />
                </Grid>
                <Grid  item md-auto>
                    <TextField
                    id="InicioTexfild"
                    label="Inicio"
                    type="time"
                    margin="normal"                
                    InputLabelProps={{
                    shrink: true,
                    }}
                        />
                </Grid>
                <Grid  item md-auto>
                  <TextField
                      id="terminoTexfild"
                      label="Termino"
                      type="time"
                      margin="normal"                
                      InputLabelProps={{
                      shrink: true,
                      }}
                  
                      />
                </Grid>
                <Grid item md-auto >
                  <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        defaultValue="00-00-0000"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                </Grid >
                <Grid item md-auto >
                    <TextField
                        id="descricaoTextfild"
                        label="Descrição"
                        placeholder="Descrição"
                        multiline
                        margin="normal"
                        variant="outlined"
                        />
                    
                </Grid>
                <Grid item md-auto> 
                     <Button variant="outlined" color="primary">
                        Registrar
                    </Button>
                </Grid>
            </Grid>
            <Grid container  alignContent="center" justify="center" direction="column" alignItems="stretch" spacing="16"> 
                
                <Grid item md-auto>
                <BottomBar>
                </BottomBar>
                </Grid>
            </Grid>
            
        </div>
    
    );   
  }
}

export default CadastrarMonitoria;
