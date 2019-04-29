import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core' ;
import AppBar from '../AppBar/AppBar'
import Pp from '../../Assets/img/Pp.png';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ProfileTab from '../ProfileTab/ProfileTab';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#1d4c72' },
      secondary: { main: '#ff0000' },
    },
    typography: { useNextVariants: true },
  });

class Profile extends Component {
    /*

    componentDidMount() {
        var token = {};

        firebase.auth().onAuthStateChanged(user =>{
            this.setState({isSignedIn: !!user});
            if(user){
                firebase.auth().currentUser.getIdToken().then(function(idToken){
                    token["access_token"] = idToken;
                });
                
                axios.post("http://localhost:8000/get_user/", token)
                    .then(res => {
                        const person = res.data
                        this.setState({data:person})
                    }).catch(error=>{
                        console.log("error");
                });
            }
          });
    }

    */
    state = {
        name:'Teste'
    }
    
    render(){
        return(
            <div style={{overflowX:'hidden'}}>
                <div style={{overflowX:'hidden'}} className="FeedBackground">
                    <Grid style={{position: "absolute"}} container justify="center" alignItems="stretch">
                        <AppBar/>    
                    </Grid>
                </div> 
                <div>   
                    <Grid container justify={'flex-start'} direction={'row'} alignContent={'center'} spacing={24} alignItems={'center'}>
                        <Grid item>
                            <img src={Pp} alt={"Profile pic"} style={{width: 130,height:130, paddingTop:80, paddingLeft:10}}></img>
                        </Grid>
                        <Grid item>
                            <Grid container justify={'flex-start'} direction={'column'} alignContent={'flex-start'} alignItems={'flex-start'} spacing={24}  style={{paddingTop:100}} alignItems={'center'}>
                                <Grid item>
                                    Name:{this.state.name}
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" component={Link} to="/EditProfile"  color="primary">
                                        Editar perfil
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <Grid container justify={'center'} alignContent={'center'} alignItems={'center'} >
                        <Grid item xs={12} style={{marginTop:10}}>
                            <ProfileTab/>
                        </Grid>
                        <Grid item>
                            Monitorias
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Profile;