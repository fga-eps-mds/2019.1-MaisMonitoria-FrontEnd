import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core' ;
import BottomBar from '../Tab/Tab.js';
import AppBar from '../AppBar/AppBar.js';
import Pp from '../../Assets/img/Pp.png';
import Course from './Course.js';
import { Link } from 'react-router-dom';
import { async } from 'q';

class EditProfile extends Component {
    state = {
        name:'',
        course: 1,
        telgram: '',
    }

    editProfile = async() =>{
        const {newName, newCourse, newTelegram} = this.state
        let newUserData  = {name: newName, course: newCourse, telegram: newTelegram}
        console.log(newUserData)

    }    
  render() {
    return (
        
        <div> 
            <Grid container justify="center" alignItems="stretch">
                <AppBar/>
            </Grid>   
            <Grid container justify="center" alignContent="center" alignItems="center">
                <Grid item> 
                    <img src={Pp} style={{width: 130,height:130,padding:80}} ></img>
                </Grid>
            </Grid>
            <Grid container justify="center" alignContent="center" alignItems="center" direction="column" >
                <Grid item xs={12}> 
                    <TextField
                        id="name"
                        label="Nome"
                        multiline
                        Maxrows="4"
                        defaultValue={this.state.name}
                        margin="normal"
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
                        defaultValue={this.state.telgram}
                        placeholder="@"
                        margin="normal"
                        onChange={(event)=>this.setState({
                            telgram: event.target.value,
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
    
    );   
  }
}

export default EditProfile;
