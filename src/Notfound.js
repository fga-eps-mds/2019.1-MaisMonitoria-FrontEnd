import React from 'react';
import { Link } from 'react-router-dom';
import { Grid} from '@material-ui/core' ;
import Typography from '@material-ui/core/Typography'; 


const NotFound = () => (
    <div>
        <Grid container direction="column" justify="center" alignItems="center" spacing={24} style={{paddingTop:50, marginLeft: 'auto', marginRight:'auto', position: 'fixed' }}>
            <Grid item>
            <Link to="/">
                <Typography variant="h3" gutterBottom>
                    Erro 404, página não encontrada!
                </Typography>
            </Link>
            </Grid>
            <Grid item>
            <Link 
                to="/">clique para voltar pra o login
            </Link>
            </Grid>
        </Grid>
    </div>
);


export default NotFound;