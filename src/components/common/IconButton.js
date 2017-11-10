import React from 'react';
import PropTypes from 'prop-types';

import './IconButton.css';

const Icon = ({onHoverText, onClick, iconSpan, faClass, iconIsVisible, style, extraClass, children}) => {
  const combinedStyle = Object.assign({},style,{
    display: iconIsVisible ? "block" : "none"
  });

  const todoCounter = iconSpan ? <span className="todoCounter">{iconSpan}</span> : null;

  return (
    <div className={`IconButton ${extraClass}`}
         title={onHoverText}
         style={combinedStyle}
    >
      {faClass ? <i className={`fa ${faClass}`} onClick={onClick}>{todoCounter}</i> : null}
      {children}
    </div>
  );
};

Icon.propTypes = {
  onHoverText: PropTypes.string,
  faClass: PropTypes.string,
  style: PropTypes.object,
  iconIsVisible: PropTypes.bool.isRequired,
  extraClass: PropTypes.string,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  style: {},
  extraClass: ""
};

export default Icon;
