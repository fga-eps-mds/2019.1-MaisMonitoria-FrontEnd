import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#44a1f2' },
    secondary: { main: '#ff0000' },
  },
  typography: { useNextVariants: true },
  overrides: {
      MuiButton: {
        raisedPrimary: {
          color: 'white',
        },
      },
  },
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
      <MuiThemeProvider theme={theme}>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          variant="fullWidth"
          centered
        >
          <Tab value="1" label="A ministrar" />
          <Tab value="2" label="Curtidas"  />
        </Tabs>
        </MuiThemeProvider>
      </Paper>
    );
  }
}

export default ProfileTab;