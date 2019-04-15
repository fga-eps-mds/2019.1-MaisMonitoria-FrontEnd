import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import Icon from '@material-ui/core/Icon';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import SvgIcon from "@material-ui/core/SvgIcon";
// import Tabs from '@material-ui/core';


const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom:0,
    left:0,

    
  },
  
};
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg>
        <path fill="#1da1f2" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
      </svg>
    </SvgIcon>
  );
}

function RankIcon(props) {
  return (
    <SvgIcon {...props} > 
      <path
        fill="#1da1f2"
        d="M20,2H4V4L9.81,8.36C6.14,9.57 4.14,13.53 5.35,17.2C6.56,20.87 10.5,22.87 14.19,21.66C17.86,20.45 19.86,16.5 18.65,12.82C17.95,10.71 16.3,9.05 14.19,8.36L20,4V2M14.94,19.5L12,17.78L9.06,19.5L9.84,16.17L7.25,13.93L10.66,13.64L12,10.5L13.34,13.64L16.75,13.93L14.16,16.17L14.94,19.5Z"
      />{" "}
    </SvgIcon>
  );
}
function Profile(props) {
  return (
    <SvgIcon {...props}>
      <svg>
        <path
          fill="#1da1f2"
          d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
        />
      </svg>
    </SvgIcon>
  );
}

function SearchIcon(props) {
  return (
    <SvgIcon {...props}>
      <svg>
        <path
          fill="#1da1f2"
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>
    </SvgIcon>
  );
}

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (

      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
      >
      
        <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Ranking"
          value="Ranking"
          icon={<RankIcon />}
        />
        <BottomNavigationAction
          label="Perfil"
          value="Perfil"
          icon={<Profile />}
        />
        <BottomNavigationAction
          label="Pesquisa"
          value="Pesquisa"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);