import React from 'react';
import { Grid, Typography,Button } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { hidden } from 'ansi-colors';
import firebase from 'firebase';
import axios from 'axios';

const theme = createMuiTheme({
    palette: {
      primary: { main: lightBlue[50] },
      secondary: { main: '#11cb5f' },
    },
    typography: { useNextVariants: true },
  });
  


class ExpandedCard extends React.Component {
  
    constructor(props){
        super(props) 
        this.state = {
            data: {},
        };
       
    }   
    componentDidMount() {
        var token = {};
        const {name, description,monitor_name} = ''
        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                    token["id_tutoring_session"] = 2;
                
                });
                
                axios.post(process.env.REACT_APP_GATEWAY+"/get_tutoring/", token)
                    .then(res => {
                        const person = res.data
                        
                        this.setState({data:person})
                        console.log(this.state)
                    });
            }
          });
      
          
    }
  render() {
    return (
        <div style={{overflowX:hidden}}>
            <Grid container justify="center" alignContent="center" direction="column">
                <Grid item alignContent="center">
                    <h1>{this.state.data.name}</h1>
                </Grid>
                <Grid item>
                    <Typography>
                        Descrição: {this.state.data.description}
                    </Typography>
                </Grid>
                <Grid item>  
                   
                </Grid>
            </Grid>
            <Grid container alignContent="center" justify="center" direction="row" spacing="24" alignItems="center" style={{marginTop: 25}}>
              <Grid item >
                  <Button  variant="outlined" color="primary" >
                  Pedir monitoria
                  </Button>
              </Grid>
                <Grid item>
                    <Button  variant="outlined" color="primary" >
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
  }
}


export default (ExpandedCard);