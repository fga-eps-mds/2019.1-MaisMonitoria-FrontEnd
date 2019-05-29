import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core' ;
import Card from '../Feed/Card';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


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
    console.log(value);
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
          <Tab value={0} label="A ministrar" />
          <Tab value={1} label="Curtidas"  />
        </Tabs>
        {this.state.value === 0 &&
          <TabContainer>
            {this.props.tutoring.map(function(item, i){
                return (
                  <Grid item key={i} lg={12} sm={12} container >
                      <Card name_monitoring={item.name} matter={item.subject} photo={item.photoUrl}
                          description={item.description} id_tutoring={item.id_tutoring_session}/>
                  </Grid>
                );
            })}
          </TabContainer>
        }
        {this.state.value === 1 && <TabContainer>Curtidas</TabContainer>}
        </MuiThemeProvider>
      </Paper>
    );
  }
}

export default ProfileTab;