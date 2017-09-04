import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../common/Modal';

import './NoteModal.css';

class NoteModal extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      note: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      note: e.target.value
    });
  }

  render() {
    return (
      <div className="note-modal">
        <Modal header="Notes">
          <textarea
            maxLength="8000"
            className="notepad"
            onChange={this.handleOnChange}
          >
          </textarea>
        </Modal>
      </div>
    );
  }
};

NoteModal.propTypes = {

};

export default NoteModal;
