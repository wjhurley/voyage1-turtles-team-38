import React from 'react';
import PropTypes from 'prop-types';

import './Radio.css';

const Radio = ({name, value, selectedValue, onChange, labelText}) => {
  return (
    <label
      className="Input"
    >
      <input
        className="Radio"
        type="radio"
        value={value}
        name={name}
        onChange={onChange}
        checked={value === selectedValue}
      />
      <span><i className="fa fa-check" aria-hidden="true"/></span>{labelText}
    </label>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default Radio;
