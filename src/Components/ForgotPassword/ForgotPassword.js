import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import lightBlue from '@material-ui/core/colors/lightBlue';
import  {Link}  from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import firebase from 'firebase';
import {withRouter} from 'react-router-dom';

import Spinner from '../Loader/Spinner';
import logo from '../../Assets/img/Logo.png';
import './ForgotPassword.css';

import CustomizedSnackbars from '../SimpleModal/Snackbars';
import SimpleModal from '../SimpleModal';

const theme = createMuiTheme({
  palette: {
    primary: { main: lightBlue[50] },
    secondary: { main: '#11cb5f' },
  },
  typography: { useNextVariants: true },
});

class ForgotPassword extends Component {
  state = {
    
    emailAddress:'',
    isAuthenticated: false,
    error: "",
    isLoading: false,
    showError: false,
    showModal: false,
  };
  
  forgotpassword = async (a) => {      
    const { emailAddress} = this.state;
    this.setState({ showError: false });

    if(!emailAddress){
      this.setState({ error: "Digite o email" });
      this.setState({ showError: true });
      a.preventDefault();
        
    }else{
      this.setState({isLoading:true});
      await firebase.auth().sendPasswordResetEmail(emailAddress)
      .then(()=>{
        this.setState({isAuthenticated: true});          
        // const route = this.state.isAuthenticated?"/":"/ForgotPassword"
        // this.props.history.push(route);
        this.setState({ showModal: true });
      }).catch(()=>{
        this.setState({ error: "Email inválido" });
        this.setState({ showError: true });
      });
      this.setState({isLoading:false});  
    };
  }
  
  render() {
    return (
      <div className="ForgotPasswordBackground">
        {this.state.showModal? <SimpleModal router={""} title={'Solicitação foi enviada para o email!'}  />:null}
        <Grid container  alignContent="center" justify="center" direction="column" alignItems="center">
          <div style={{ padding: 80 }}>
        <Grid container  alignContent="center" justify="center" direction="column" alignItems="center" spacing={24}>
          <img src={logo} alt="Logo" />
          <Grid item >
            <TextField
              id="emailTextField"
              label="Email"
              margin="normal"
              value={this.state.emailAddress}
              onChange={(event)=>this.setState({
              emailAddress: event.target.value,
              })}
              />
              </Grid>
              {this.state.showError? <CustomizedSnackbars error={this.state.error}/>:null}
            </Grid>
            {this.state.isLoading ? <Spinner />:
              <Grid container alignContent="center" justify="center" direction="column" spacing={16} alignItems="center" style={{marginTop: 25}}>
                <Grid item >
                  <MuiThemeProvider theme={theme}>
                    <Button variant="outlined" color="primary" onClick={this.forgotpassword}>
                      Enviar
                    </Button>
                  </MuiThemeProvider>
                </Grid>
                <Grid item >
                  <MuiThemeProvider theme={theme}>
                    <Button component={Link} to="/" variant="outlined" color="primary">
                      Voltar
                    </Button>
                  </MuiThemeProvider>
                </Grid>
              </Grid>
            } 
          </div>
        </Grid>  
      </div>
    );   
  }
}

export default withRouter(ForgotPassword);
