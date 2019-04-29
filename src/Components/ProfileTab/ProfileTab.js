import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';




const styles = theme => ({
    root: {
      width: '100%',
      position: 'fixed',
      bottom:0,
      left:0,
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
  
    }
});

class ProfileTab extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper square >
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          variant="fullWidth"
          centered
        >
          <Tab label="A ministrar" />
          <Tab label="A assistir" disabled />
          <Tab label="Historico"disabled />
        </Tabs>
      </Paper>
    );
  }
}

export default ProfileTab;