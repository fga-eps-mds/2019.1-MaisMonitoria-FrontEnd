import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SvgIcon from '@material-ui/core/SvgIcon'
import { Grid } from "@material-ui/core";
import axios from 'axios';

function Add(props) {
  return (
    <SvgIcon {...props}>
      <svg>
        <path fill="#000000" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>
    </SvgIcon>
  );
}

const styles = theme => ({
  card: {
    minWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  
 
    state =  {lista : [],name_monitoring:'', matter:'', expanded: false}
    async componentDidMount() {
     await axios.get(`https://gist.githubusercontent.com/caiooliv/17243478be5bddb4f26fcba90b25a031/raw/fa9049b4ae9aa6d283edadd0d2e2e1ec81cb81bc/teste.json`)
      .then(res => {
        console.log('entrou')
        const person = res.data
        this.setState({name_monitoring:person['name_monitoring'], matter: person['matter'] })
      })
  }


  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
      <Grid container
  direction="column"
  justify="center"
  alignItems="center">
  
        <CardHeader
         
          title={this.state.name_monitoring}
          subheader={this.state.matter}
          
        />
        </Grid>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <Add />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Mostrar Mais"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Descrição:</Typography>
            <Typography paragraph>
              Lorem Ipsum 
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);