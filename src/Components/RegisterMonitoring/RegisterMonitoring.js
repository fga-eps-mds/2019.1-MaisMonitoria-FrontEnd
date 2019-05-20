import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import AppBar from '../AppBar/AppBar.js';
import axios from 'axios';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { validateRegisterMonitoring, success } from '../../Helpers/validates.js';
import {withRouter} from 'react-router-dom';
import SimpleModal from '../SimpleModal';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      primary: { main: '#44a1f2' },
      secondary: { main: '#fafafa' },
    },
    typography: { useNextVariants: false },
    overrides: {
        MuiButton: {
          raisedPrimary: {
            color: 'white',
          },
        },
    },
  });

class RegisterMonitoring extends Component {
    
    state ={
        monitoring:{
            name: '',
            subject: '',
            description: '',
        },
        error:'',
        showModal: false,
    }

    registerMonitoring = (e) =>{
        var token = {};
        const {monitoring} = this.state;

        if(!validateRegisterMonitoring(monitoring)){
            this.setState({ error: "Digite os campos obrigatorios." });
            e.preventDefault();
            return;
        }
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["name"] = monitoring.name;
                    token["access_token"] = idToken;
                    token["subject"] = monitoring.subject;
                    token["description"] = monitoring.description;
                });
                
                axios.post(process.env.REACT_APP_GATEWAY+"/create_tutoring/", token).then((x)=>{
                    if(success(x)) this.props.history.push('/feed');
                  });
            }
          });
    }

  render() {
      
    return (
    
        <div style={{overflowX:'hidden'}}>
            {this.state.showModal? <SimpleModal router={"Feed"} title={'Monitoria cadastrada com sucesso!'}  />:null}
            <div>
                <Grid container justify="center" alignItems="stretch">
                    <AppBar/>
                </Grid>
            </div>
            <div>    
                <Grid container  alignContent="center" justify="center" direction="column" alignItems="center" spacing={16} style={{ padding: 60 }}>   
                    <Grid item md-auto>
                        <TextField
                        error = {this.state.error}
                        required= "true"
                        id="temaTextField"
                        label="Tema"
                        margin="normal"
                        onChange={(event)=>this.setState({ ...this.state, monitoring: { ...this.state.monitoring, name: event.target.value } })}
                        />
                    </Grid>
                    <Grid item md-auto>
                        <TextField
                        error = {this.state.error}
                        required= "true"
                        id="temaTextField"
                        label="Matéria"
                        margin="normal"
                        onChange={(event)=>this.setState({ ...this.state, monitoring: { ...this.state.monitoring, subject: event.target.value } })}
                        />
                    </Grid>
                    <Grid  item md-auto>
                        <TextField
                            id="descricaoTextfild"
                            label="Descrição"
                            placeholder="Descrição"
                            multiline
                            margin="normal"
                            variant="outlined"
                            onChange={(event)=>this.setState({ ...this.state, monitoring: { ...this.state.monitoring, description: event.target.value } })}
                            />
                        
                    </Grid>
                    <Grid>
                        <Typography variant="h6" align="center" color=''>
                            {this.state.error && <p style={{color:'#f44336'}}>{this.state.error}</p>}
                        </Typography>
                    </Grid>
                    <Grid container  alignContent="center" justify="center" direction="row" alignItems="center" spacing={16} style={{paddingTop:40}}>
                        <Grid item>
                            <MuiThemeProvider theme={theme}>
                                <Button variant="contained" component={Link}  color='primary'  onClick={this.registerMonitoring} >
                                    Registrar
                                </Button>
                            </MuiThemeProvider>
                        </Grid>
                        <Grid item>
                        <MuiThemeProvider theme={theme}> 
                            <Button variant="contained" color="primary" component={Link} to="/Feed" >
                                Cancelar
                            </Button>
                        </MuiThemeProvider>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    
    );   
  }
}

export default withRouter(RegisterMonitoring);