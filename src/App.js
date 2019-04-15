import React, { Component } from 'react';
/* import TelaLogin from './Components/TelaLogin/TelaLogin.js'; */
import './App.css';
import { Grid } from '@material-ui/core' ;
/* import TelaRegister from './Components/TelaRegister/TelaRegister.js'; */
// import TelaRegister from './Components/EsqueceuSenha/EsqueceuSenha.js';
// import ModificarSenha from './Components/ModificarSenha/ModificarSenha.js';
import CadastrarMonitoria from './Components/CadastrarMonitoria/CadastrarMonitoria.js';

class App extends Component {
  render() {
    return (
      <body className="BodyPrincipal">
      <Grid>
          <CadastrarMonitoria />
      </Grid>
      </body>
    );
  }
}

export default App;
