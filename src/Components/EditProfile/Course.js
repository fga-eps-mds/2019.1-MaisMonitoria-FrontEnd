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
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    selectedCourse:0,
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
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
            <MenuItem value={0}>Engenharias</MenuItem>
            <MenuItem value={1}>Engenharia de Software</MenuItem>
            <MenuItem value={2}>Engenharia Aeroespacial</MenuItem>
            <MenuItem value={3}>Engenharia Eletrônica</MenuItem>
            <MenuItem value={4}>Engenharia Automotiva</MenuItem>
            <MenuItem value={5}>Engenharia de Energia</MenuItem>        
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