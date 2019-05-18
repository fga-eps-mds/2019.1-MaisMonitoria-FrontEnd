import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import {withRouter} from 'react-router-dom';
import { Grid, Button, TextField } from '@material-ui/core' ;

class SimpleModal extends React.Component {
  state = {
    open: true,
  };

  getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
        position: 'absolute',
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
  }

  handleClose = () => {
    this.setState({ open: false });
    this.props.history.push('/');
  };

  render() {
    const { title, description } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          style={{ alignItems:'center',justifyContent:'center' }}
        >
          <div style={this.getModalStyle()} >
            <Typography variant="h6" id="modal-title">
              {title}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {description}
            </Typography>
            <Button variant="outlined" onClick={this.handleClose} color="primary">Fechar</Button>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withRouter(SimpleModal);