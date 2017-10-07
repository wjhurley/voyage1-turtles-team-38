import React from 'react';
import PropTypes from 'prop-types';

import './Text.css';

const Text = ({name, value, onChange, onKeyPress, labelText, disabled, placeholder}) => {
  return (
    <label className="Input">
      {labelText}
      <input
        className="Text"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        disabled={disabled}
      />
      </label>
  );
};

Text.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Text.defaultProps = {
  disabled: false,
};

export default Text;

