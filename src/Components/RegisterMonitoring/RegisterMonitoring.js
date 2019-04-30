import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import AppBar from '../AppBar/AppBar.js';
import axios from 'axios';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

class RegisterMonitoring extends Component {
    
    state ={
        name: '',
        subject: '',
        description: '',
    }

    registerMonitoring = () =>{
        var token = {};
        const {name,subject,description} = this.state;

        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["name"] = name;
                    token["access_token"] = idToken;
                    token["subject"] = subject;
                    token["description"] = description;
                    console.log(token)
                });
                
                axios.post("http://localhost:8000/create_tutoring/", token)
                    .then(res => {
                        console.log(res)
                    }).catch(error=>{
                        console.log("error");
                });
            }
          });
    }

  render() {
      
    return (
    
        <div style={{overflowX:'hidden'}}>
            <div>
                <Grid container justify="center" alignItems="stretch">
                    <AppBar/>
                </Grid>
            </div>
            <div>    
                <Grid container  alignContent="center" justify="center" direction="column" alignItems="center" spacing={16} style={{ padding: 60 }}>   
                    <Grid item md-auto>
                        <TextField
                        id="temaTextField"
                        label="Tema"
                        margin="normal"
                        onChange={(event)=>this.setState({
                            name: event.target.value,
                        })}
                        />
                    </Grid>
                    <Grid item md-auto>
                        <TextField
                        id="temaTextField"
                        label="Matéria"
                        margin="normal"
                        onChange={(event)=>this.setState({
                            subject: event.target.value,
                        })}
                        />
                    </Grid>
                    <Grid item>
                        <Grid container alignContent="center" justify="center" direction="row" alignItems="center" spacing={16}>
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
                        </Grid>    
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
                            onChange={(event)=>this.setState({
                                description: event.target.value,
                            })}
                            />
                        
                    </Grid>
                    <Grid container  alignContent="center" justify="center" direction="row" alignItems="center" spacing={16} style={{paddingTop:40}}>
                        <Grid item>
                            <Button variant="outlined" color="primary" onClick={this.registerMonitoring} >
                                Registrar
                            </Button>
                        </Grid>
                        <Grid item> 
                            <Button variant="outlined" color="primary" component={Link} to="/Feed" >
                                Cancelar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    
    );   
  }
}

export default RegisterMonitoring;
