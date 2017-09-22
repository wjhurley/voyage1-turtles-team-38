import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({onClick, children, extraClassNames, border, display, style}) => {

  const classes = extraClassNames ? `Button ${extraClassNames}` : 'Button';
  const buttonStyle = Object.assign({}, style, {border, display});

  return (
    <button
      className={classes}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  border: PropTypes.string,
  display: PropTypes.string,
  extraClassNames: PropTypes.string,
  style: PropTypes.object,
};

Button.defaultProps = {
  border: 'none',
  display: 'block',
};

export default Button;
