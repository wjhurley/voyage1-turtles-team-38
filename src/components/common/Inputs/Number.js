import React from 'react';
import PropTypes from 'prop-types';

import './Number.css';

const Number = ({name, value, onChange, labelText, disabled, placeholder}) => {
  return (
    <label className="Input">
      {labelText}
      <input
        className="Number"
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      </label>
  );
};

Number.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Number.defaultProps = {
  disabled: false,
};

export default Number;

