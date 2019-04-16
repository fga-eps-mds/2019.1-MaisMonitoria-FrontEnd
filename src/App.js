import React, { Component } from 'react';
import './App.css';
import { Grid } from '@material-ui/core' ;
/* import TelaLogin from './Components/TelaLogin/TelaLogin.js'; */
/* import TelaRegister from './Components/TelaRegister/TelaRegister.js'; */
// import TelaRegister from './Components/EsqueceuSenha/EsqueceuSenha.js';
// import ModificarSenha from './Components/ModificarSenha/ModificarSenha.js';
// import CadastrarMonitoria from './Components/CadastrarMonitoria/CadastrarMonitoria.js';
// import EditarPerfil from './Components/EditarPerfil/EditarPerfil.js';
import TelaFeed from './Components/TelaFeed/TelaFeed.js';
 

class App extends Component {
  render() {
    return (
      <body className="BodyPrincipal">
      <Grid container  justify="center" >
          <TelaFeed/>
      </Grid>
      </body>
    );
  }
}

export default App;
