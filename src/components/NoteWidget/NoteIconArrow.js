import React from 'react';
import PropTypes from 'prop-types';

import './NoteArrow.css';

const NoteArrow = ({hidden}) => {
  return (
    <div
      className="note-arrow"
      style={{visibility: hidden ? "hidden" : "visible"}}
    >
      <i className="fa fa-angle-up" />
    </div>
  );
};

NoteArrow.propTypes = {
  hidden: PropTypes.bool.isRequired
};

export default NoteArrow;
