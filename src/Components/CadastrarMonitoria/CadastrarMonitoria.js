import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import BottomBar from '../BottomBar/BottomBar.js';
import AppBar from '../AppBar/AppBar.js';


class CadastrarMonitoria extends Component {
    
  render() {
      
    return (
    
        <div >
       
            <Grid container   justify="center" alignItems="stretch">
                <AppBar/>
            </Grid>    
            <Grid container  alignContent="center" justify="center" direction="column" alignItems="center" spacing="16" style={{ padding: 60 }}>
                
                <Grid item md-auto>
                    <TextField
                    id="temaTextField"
                    label="Tema"
                    margin="normal"
                    />
                </Grid>
                <Grid item md-auto>
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
                <Grid item md-auto>
                  <TextField
                        id="date"
                        label="Data"
                        type="date"
                        defaultValue="00-00-0000"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        />
                </Grid >
                <Grid  item md-auto>
                    <TextField
                        id="descricaoTextfild"
                        label="Descrição"
                        placeholder="Descrição"
                        multiline
                        margin="normal"
                        variant="outlined"
                        />
                    
                </Grid>
                <Grid item> 
                     <Button variant="outlined" color="primary">
                        Registrar
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

export default CadastrarMonitoria;
