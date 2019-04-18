import React, { Component } from 'react';
import './App.css';
import { Grid } from '@material-ui/core' ;
// import Login from './Components/Login/Login.js'; 
// import SignUp from './Components/SignUP/SignUp.js';
import EditProfile from './Components/EditProfile/EditProfile';
//  import ForgotPassword from './Components/ForgotPassword/ForgotPassword.js';
// import ModifyPassword from './Components/ModifyPassword/ModifyPassword.js';
 //import RegisterMonitoring from './Components/RegisterMonitoring/RegisterMonitoring.js';
// import EditProfile from './Components/EditProfile/EditProfile.js';
// import Feedback from './Components/Feedback/Feedback.js';
// import Search from './Components/Search/Search.js'

class App extends Component {
  render() {
    return (
      <body className="BodyPrincipal">
      <Grid container  justify="center" >
          <EditProfile/>
      </Grid>
      </body>
    );
  }
}

export default App;
