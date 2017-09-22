import React from 'react';
import PropTypes from 'prop-types';

import './Icon.css';

const Icon = ({faClass, hoverText}) => {
  return (
    <i
      title={hoverText}
      className={`fa ${faClass}`}
      aria-hidden="true"
    />
  );
};

Icon.propTypes = {
  faClass: PropTypes.string,
  hoverText: PropTypes.string,
};

export default Icon;
