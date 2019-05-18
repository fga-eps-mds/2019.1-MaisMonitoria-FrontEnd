import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import { Grid, Typography } from "@material-ui/core";



const styles = theme => ({
  card: {
    minWidth: '100%',
  },

  teste: {
    width:90,
    height: 90,
    paddingLeft: 10,
    paddingBottom: 10,
    borderRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50, 

  }

});

class ContractCard extends React.Component {
  
 
  state =  {lista : [],name_monitoring:'', matter:'', expanded: false}

  render() {
    const { classes } = this.props;
    var photoUrl = this.props.photo;
    photoUrl = photoUrl.replace("api-monitoria","localhost")
    return (
      
      <Card className={classes.card} >
        <Grid container  direction="row" >
          <Grid item>
            <Grid container direction="column" alignContent="center" alignItems="center" >
              <Grid item>
                <img className={classes.teste}  src={photoUrl}></img>
              </Grid>
              <Grid item>
                {this.props.monitorName}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justify='center'>
              <Grid item> 
                <CardContent>
                  <Typography component="h5" variant="h5">
                  {this.props.name_monitoring}
                  </Typography>
                  <Typography>
                  {this.props.description}
                  </Typography>
                </CardContent>
                </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Card>
    );
  }
}

ContractCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContractCard);