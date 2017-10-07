import React from 'react';
import PropTypes from 'prop-types';

import './Checkbox.css';

const Checkbox = ({name, checked, onChange, labelText}) => {

  return (
      <label
        className="Input"
      >
        <input
          className="Checkbox"
          type="checkbox"
          checked={checked}
          name={name}
          onChange={onChange}
          // defaultChecked={checked}
        />
        <span><i className="fa fa-check" aria-hidden="true"/></span>{labelText}
      </label>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
};

export default Checkbox;
