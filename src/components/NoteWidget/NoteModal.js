import React from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';

import Modal from '../common/Modal';

import './NoteModal.css';
import {updateNoteContent} from "../../actions/noteActions";

const NoteModal = ({note, updateNoteContent}) => {

  // handleOnChange(e) {
  //   this.setState({
  //     note: e.target.value
  //   });
  // }

  return (
    <div className="note-modal">
      <Modal header="Notes">
          <textarea
            maxLength="8000"
            className="notepad"
            onChange={e => updateNoteContent(e.target.value)}
          >{note.content}
          </textarea>
      </Modal>
    </div>
  );
};

function mapStateToProps({note}) {
  return {note};
}

function mapDispatchToProps(dispatch) {
  return {
    updateNoteContent: content => {
      dispatch(updateNoteContent(content))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteModal);
