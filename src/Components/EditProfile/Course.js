import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 200,
  },
});

class SimpleSelect extends React.Component {

  state = {
    selectedCourse:'',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.curso !== this.props.curso){
      this.setState({
        selectedCourse: nextProps.curso
      });
    }
  }
  
  handleChange = event => {
    this.props.action(event.target.value);
    this.setState({ selectedCourse: event.target.value });
  };

  render() {
  
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
            Curso
          </InputLabel>
          <Select
            value={this.state.selectedCourse}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                id="course"
              />
            }
          >
            <MenuItem value={"ENGENHARIAS"}>Engenharias</MenuItem>
            <MenuItem value={"SOFTWARE"}>Engenharia de Software</MenuItem>
            <MenuItem value={"AERO"}>Engenharia Aeroespacial</MenuItem>
            <MenuItem value={"ELETRONICA"}>Engenharia Eletrônica</MenuItem>
            <MenuItem value={"AUTOMOTIVA"}>Engenharia Automotiva</MenuItem>
            <MenuItem value={"ENERGIA"}>Engenharia de Energia</MenuItem>        
          </Select>
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);