import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core' ;
import AppBar from '../AppBar/AppBar'
import Pp from '../../Assets/img/Pp.png';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import DisabledTabs from '../ProfileTab/ProfileTab'
import ProfileTab from '../ProfileTab/ProfileTab';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#000000' },
      secondary: { main: '#ff0000' },
    },
    typography: { useNextVariants: true },
  });

class Profile extends Component {
    
    state = {
        name:'Teste'
    }
    
    render(){
        return(
            <div>
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
                        <Grid item >
                            <MuiThemeProvider theme={theme}>
                                <Button variant="outlined" color="primary" style={{marginTop:150}}>
                                    Editar Perfil
                                </Button>
                            </MuiThemeProvider>
                        </Grid>
                    </Grid>
                    <Grid container justify={'flex-start'} direction={'row'} alignContent={'center'} spacing={24} alignItems={'center'} >
                        <Grid item style={{paddingLeft:30}}>
                            Name : {this.state.name}
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