import React, { Component } from 'react';
import { Grid, Button, Card } from '@material-ui/core' ;
import AppBar from '../AppBar/AppBar';
import Tab from '../Tab/Tab'
import './feed.css';
import axios from 'axios';



class TelaFeed extends Component {
    state =  {lista : [],name_monitoring:'', matter:'', deion:'', expanded: false}
    async componentDidMount() {
     await axios.get(`https://gist.githubusercontent.com/caiooliv/17243478be5bddb4f26fcba90b25a031/raw/fa9049b4ae9aa6d283edadd0d2e2e1ec81cb81bc/teste.json`)
      .then(res => {
        console.log('entrou')
        const person = res.data
        this.setState({name_monitoring:person['name_monitoring'], matter: person['matter'], deion: person['deion'] })
      })
  }
  render() {
      
    return (
    
      <div>
      
        <Grid container justify="center" alignItems="stretch">
          <AppBar/>
        </Grid> 
        <Grid container justify="center" direction="column" alignItems="center" spacing={8} style={{ padding: 80 }}>
          <Grid item>
          </Grid>
        </Grid>

        <Grid container alignContent="center" justify="center" direction="row" alignItems="center">
          <Tab/>
        </Grid>
          
      </div>
  
    
    );   
  }
}

export default TelaFeed;