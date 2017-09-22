import React from 'react';
import PropTypes from 'prop-types';

import './Select.css';

const Select = ({name, value, options, labelText, onChange}) => {
  return (
    <label className="Input">
      {labelText}
      <select
        className="Select"
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map(opt => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.labelText}
            </option>
          );
        })}
      </select>
    </label>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    labelText: PropTypes.string,
  })).isRequired,
  labelText: PropTypes.string,
};

export default Select;
