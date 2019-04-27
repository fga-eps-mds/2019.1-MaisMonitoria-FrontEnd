import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import BottomBar from '../Tab/Tab.js';
import AppBar from '../AppBar/AppBar.js';
import Pp from '../../Assets/img/Pp.png';
import Course from './Course.js';
import { Link } from 'react-router-dom';


class EditProfile extends Component {
    state = {
        name:'batatinha',
        course: 1,
        telgram: '',
    }

    editProfile = () =>{
        const {name,course,telegram} = this.state
        let newUserData  = {name: name, course: course, telegram: telegram}

    }    
  render() {
    return (
        <div style={{overflowX:'hidden'}}>
            <div> 
                <Grid container justify="center" alignItems="stretch">
                    <AppBar/>
                </Grid> 
            </div>
        <div>
            <Grid container justify="center" alignContent="center" alignItems="center">
                <Grid item> 
                    <img src={Pp} alt="Profilepic" style={{width: 130,height:130,padding:80}} ></img>
                </Grid>
            </Grid>
            <Grid container justify="center" alignContent="center" alignItems="center" direction="column" >
                <Grid item xs={12}> 
                    <TextField
                        id="name"
                        label="Nome"
                        multiline
                        Maxrows="4"
                        margin="normal"
                        defaultValue={this.state.name}
                        onChange={(event)=>this.setState({
                            name: event.target.value,
                        })}
                    />
                </Grid>
                <Grid item> 
                    <TextField
                        id="telegram"
                        label="Telegram"
                        multiline
                        Maxrows="4"
                        placeholder="@"
                        margin="normal"
                        onChange={(event)=>this.setState({
                            telegram: event.target.value,
                        })}
                    />
                </Grid>
                <Grid item style={{padding:30}}>
                    <Course/>
                </Grid>
            </Grid>
            <Grid container justify="center" alignContent="center" alignItems="center" direction="row" spacing={24}>
                <Grid item>
                    <Button component={Link} to="/EditProfile" variant="outlined" onClick={this.editProfile} color="primary">
                        Confirmar
                    </Button>
                </Grid>
                <Grid item>
                    <Button component={Link} to="/Feed" variant="outlined" color="primary">
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
            <Grid> 
                <Grid >
                <BottomBar>
                </BottomBar>
                </Grid>
            </Grid>
            </div>
        </div>
        
    );   
  }
}

export default EditProfile;
