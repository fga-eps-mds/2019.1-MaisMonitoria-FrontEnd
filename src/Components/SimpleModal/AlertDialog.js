import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import firebase from 'firebase';
import axios from 'axios';
import {success} from '../../Helpers/validates';
import {withRouter} from 'react-router-dom';


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

  
class  AlertDialog extends React.Component {

  state = { 
    open: false,
    setOpen: false,
  }
  
  delete_tutoring= ()=>{
    var token= {};
    var idTutoring = this.props.match.params.id_tutoring; 
      token["id_tutoring"] = idTutoring;
    firebase.auth().currentUser.getIdToken().then(function(idToken){
      token["access_token"] = idToken;
     
    });
  
    axios.post(process.env.REACT_APP_GATEWAY+"/delete_tutoring/", token)
        .then(res => {
          if(success(res)){
            this.props.history.push('/Feed');
          } 
        });
  }
  handleClickOpen = ()=> {
    this.setState({open: true});
  }

  handleClose = ()=>{
    this.setState({setOpen: false});
    this.props.history.push('/Feed');
  }
render(){
    return (
      <div>
          <MuiThemeProvider theme={theme}>
              <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                  excluir
              </Button>
          </MuiThemeProvider>
          <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-deion"
          >
              <DialogTitle id="alert-dialog-title">{"Excluir Monitoria?"}</DialogTitle>
              <DialogContent>
              <DialogContentText id="alert-dialog-deion">
                  Deseja realmente excluir a monitoria?
              </DialogContentText>
              </DialogContent>
              <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                  cancelar
              </Button>
              <Button onClick={this.delete_tutoring} color="primary" autoFocus>
                  excluir
              </Button>
              </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withRouter(AlertDialog);