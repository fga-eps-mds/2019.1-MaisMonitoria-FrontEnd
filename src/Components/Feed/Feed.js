import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core' ;
import Tab from '../Tab/Tab.js';
import AppBar from '../AppBar/AppBar.js';
import Card from './Card.js';
import Add from '../GenericButtons/Add.js';
import './feed.css';
import axios from 'axios';



class TelaFeed extends Component {
    state =  {lista : [],name_monitoring:'', matter:'', deion:'', expanded: false}
    async componentDidMount() {
     await axios.get(`https://gist.githubusercontent.com/caiooliv/17243478be5bddb4f26fcba90b25a031/raw/fa9049b4ae9aa6d283edadd0d2e2e1ec81cb81bc/teste.json`)
      .then(res => {
        const person = res.data
        this.setState({name_monitoring:person['name_monitoring'], matter: person['matter'], deion: person['deion'] })
      })
  }
  render() {
      
    return (
    
        <div >
            
            <Grid container   justify="center" alignItems="stretch">
                <AppBar/>
                
            </Grid> 
        
            <Grid container  justify="center" direction="column" alignItems="center" spacing="8" style={{ padding: 80 }}>
                
                <Grid item xs={12} sm container>
                    <Card name_monitoring={this.state.name_monitoring} matter={this.state.matter} deion={this.state.deion}/>
                </Grid>

            </Grid>
            <Grid container>
                <Grid>
                    <Add/>
                    </Grid>
                </Grid>
            <Grid container  >                
                <Grid >
                <Tab>
                </Tab>
                </Grid>
            
            </Grid>
          
        </div>
    
    );   
  }
}

export default TelaFeed;