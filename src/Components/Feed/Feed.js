import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core' ;
import Tab from '../Tab/Tab.js';
import AppBar from '../AppBar/AppBar.js';
import Card from './Card.js';
import ButtonSizes from '../GenericButtons/Add.js';
import './feed.css';
import axios from 'axios';
import { relative } from 'upath';



class TelaFeed extends Component {
    state =  {expanded: false,data : [{
        "id_monitoring": 1,
        "name_monitoring": "chapa halls",
        "matter": "Matematica",
        "deion": "asdasdasdasdsfdlfdojfop",
        "status_monitoring": true,
        "create_date": "2019-04-20T18:57:56.361863Z"
        },{
            "id_monitoring": 2,
            "name_monitoring": "chapa halls",
            "matter": "Matematica",
            "deion": "asdasdasdasdsfdlfdojfop",
            "status_monitoring": true,
            "create_date": "2019-04-20T18:57:56.361863Z"
        },{
            "id_monitoring": 2,
            "name_monitoring": "chapa halls",
            "matter": "Matematica",
            "deion": "asdasdasdasdsfdlfdojfop",
            "status_monitoring": true,
            "create_date": "2019-04-20T18:57:56.361863Z"
        },{
            "id_monitoring": 2,
            "name_monitoring": "chapa halls",
            "matter": "Matematica",
            "deion": "asdasdasdasdsfdlfdojfop",
            "status_monitoring": true,
            "create_date": "2019-04-20T18:57:56.361863Z"
        },{
            "id_monitoring": 2,
            "name_monitoring": "chapa halls",
            "matter": "Matematica",
            "deion": "asdasdasdasdsfdlfdojfop",
            "status_monitoring": true,
            "create_date": "2019-04-20T18:57:56.361863Z"
        }]}
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
        <div className="FeedBackground">
            <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
                <AppBar/>    
            </Grid> 
            <div>
            <Grid container justify="center" direction="column" alignItems="center" spacing="8" style={{paddingTop:70}}>
                {this.state.data.map(function(item, i){
                    return (
                        <Grid item key={i} lg={12} sm={12} container >
                            <Card name_monitoring={item.name_monitoring} matter={item.matter} deion={item.deion}/>
                        </Grid>
                    );
                })}
            </Grid>
            </div>
            <div>    
            <Grid container>
                <Grid>
                    <ButtonSizes/>
                </Grid>
            </Grid>
            </div>
            
        </div>
    
    );   
  }
}

export default TelaFeed;