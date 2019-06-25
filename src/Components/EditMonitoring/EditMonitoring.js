import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import AppBar from '../AppBar/AppBar.js';

import { Link } from 'react-router-dom';
import axios from 'axios';
import firebase from 'firebase';

import { validateEditMonitoring, success } from '../../Helpers/validates.js';
import SimpleModal from '../SimpleModal';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CustomizedSnackbars from '../SimpleModal/Snackbars';


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

class EditMonitoring extends Component {

    state = {
        name:'',
        subject: '',
        description: '',
        showModal: false,
        showError: false,
        showWarning: false,
        Error:'',
        nameError: '',
        subjectError: '',
        descriptionError: '',
        
    }

    componentDidMount(){
        this.getTutoringData();
    }

     getTutoringData = () =>{
        var token = {};
        var idTutoring = this.props.match.params.id_tutoring;
        this.setState({showError:false});
        this.setState({showModal:false});

        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                    token["id_tutoring_session"] = idTutoring;
                });
                
                axios.post(process.env.REACT_APP_GATEWAY+"/get_tutoring/", token)
                    .then(res => {
                        const person = res.data
                        this.setState({name:person.name, subject:person.subject, 
                                       description:person.description}) 
                    });
            }else{
                this.props.history.push('/');
            }
        });
    }
    
    EditMonitoring = (e) =>{
        this.setState({showError:false});
        this.setState({showModal:false});

        this.setState({nameError:''});
        this.setState({subjectError:''});
        this.setState({descriptionError:''});

        var idTutoring = this.props.match.params.id_tutoring;
        var token = {};

        if(!this.state.name){
            this.setState({error:'Digite os campos obrigatórios'});
            this.setState({nameError:'true'});
            this.setState({showError:true});
        }

        if(!this.state.subject){
            this.setState({error:'Digite os campos obrigatórios'});
            this.setState({subjectError:'true'});
            this.setState({showError:true});
        }

        if(!this.state.description){
            this.setState({error:'Digite os campos obrigatórios'});
            this.setState({descriptionError:'true'});
            this.setState({showError:true})
        }

        if(!validateEditMonitoring(this.state)){
            this.setState({error:'Digite os campos obrigatórios'});
            this.setState({showError:true});
            return;
        }

        token.id_tutoring_session = idTutoring;
        token.name = this.state.name;
        token.subject = this.state.subject;
        token.description = this.state.description;

        firebase.auth().currentUser.getIdToken().then(function(idToken){  
            token["access_token"] = idToken;      
        })
        
        axios.post(process.env.REACT_APP_GATEWAY+"/update_tutoring/", token).then((x)=>{
            if(success(x)) this.setState({showModal:true});
        })
    }
    
  render() {
    return (
        
        <div style={{overflowX:'hidden'}} className="editBackground"> 
            {this.state.showModal? <SimpleModal router={`/expandedCard/${this.props.match.params.id_tutoring}`} title={'Monitoria alterada com sucesso!'}  />:null} 
            <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
                <AppBar/>
            </Grid>  
            <Grid style={{paddingTop:150}} container alignContent="center" alignItems="center" justify="flex-end" direction="column" >
                <Grid item md-auto>
                    <TextField
                    error = {this.state.nameError}
                    required= "true"
                    id="name"
                    label="Tema"
                    margin="normal"
                    value={this.state.name}
                    onChange={(event)=>this.setState({
                        name: event.target.value,
                    })}
                    />
                </Grid>
                <Grid item md-auto>
                    <TextField
                        error = {this.state.subjectError}
                        required= {true}
                        id="subject"
                        label="Matéria"
                        multiline
                        placeholder=""
                        margin="normal"
                        value={this.state.subject}
                        onChange={(event)=>this.setState({
                            subject: event.target.value,
                        })}
                    />
                </Grid>
                <Grid  item md-auto>
                    <TextField
                        error = {this.state.descriptionError}
                        required = {true}
                        id="description"
                        label="Descrição"
                        placeholder=""
                        multiline
                        margin="normal"
                        variant="outlined"
                        value={this.state.description}
                        onChange={(event)=>this.setState({
                            description: event.target.value,
                        })}
                    />
                    
                </Grid>
            </Grid>
                <Grid container style={{paddingTop:20}} alignContent="center" justify="center" direction="row" spacing={24} alignItems="center">
                    {this.state.showError? <CustomizedSnackbars error={this.state.error}/>:null}
                </Grid> 
            <Grid container style={{paddingTop:5}} justify="center" alignContent="center" alignItems="center" direction="row" spacing={24}>
                <Grid item>
                    <MuiThemeProvider theme={theme}>
                        <Button variant="contained" onClick={this.EditMonitoring} color="primary">
                            Confirmar
                        </Button>
                    </MuiThemeProvider>
                </Grid>
                <Grid item>
                    <MuiThemeProvider theme={theme}>
                        <Button component={Link} to={`/expandedCard/${this.props.match.params.id_tutoring}`} variant="contained" color="primary">
                            Cancelar
                        </Button>
                    </MuiThemeProvider>
                </Grid>
            </Grid>
        </div>
        
    );   
  }
}

export default EditMonitoring;
