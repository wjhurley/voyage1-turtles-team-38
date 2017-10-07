import React from 'react';
import PropTypes from 'prop-types';

import './TextArea.css';

const TextArea = ({name, value, onChange, placeholder, maxLength, spellcheck, style}) => {
  return (
    <textarea
      className="Input TextArea"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      maxLength={maxLength}
      spellCheck={spellcheck}
    />
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  style: PropTypes.object,
  maxLength: PropTypes.number,
  spellcheck: PropTypes.bool,
};

TextArea.defaultProps = {
  style: {borderBottom:"1px solid rgba(255,255,255,0.3)"},
  maxLength: 8000,
};

export default TextArea;

