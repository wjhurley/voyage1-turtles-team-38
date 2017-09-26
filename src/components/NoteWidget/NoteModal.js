import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../common/Modal';

import './NoteModal.css';

const NoteModal = ({content, onContentChange}) => {

  return (
    <div className="note-modal">
      <Modal header="Notes">
          <textarea
            maxLength="8000"
            className="notepad"
            value={content}
            onChange={e => onContentChange(e.target.value)}
          />
      </Modal>
    </div>
  );
};

NoteModal.propTypes = {
  content: PropTypes.string.isRequired,
  onContentChange: PropTypes.func.isRequired
};

export default NoteModal;
