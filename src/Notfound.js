import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './Assets/img/PageNotFound.png';
import Typography from '@material-ui/core/Typography';

const useStyles = ()=> ( {
    root: {
      width: '100%',
      maxWidth: 500,
    },
  });


const NotFound = () => (
<div>
    <center>
        <Link to="/">
            <Typography variant="h3" gutterBottom>
                Erro 404, página não encontrada!
            </Typography>
        </Link>
    </center>
<center><Link to="/">clique para voltar pra o login</Link></center>
</div>
);


export default NotFound;