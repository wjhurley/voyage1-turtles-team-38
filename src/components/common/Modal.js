import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

const Modal = ({header, children}) => {
  return (
    <div className="Modal">
      {header ? <h4>{header}</h4> : null}
      <div className="body">{children}</div>
    </div>
  );
};

Modal.propTypes = {
  header: PropTypes.string
};

export default Modal;
