import React from 'react';
import PropTypes from 'prop-types';

import './IconButton.css';

const Icon = ({onHoverText, onClick, faClass, iconIsVisible, style, extraClass, children}) => {
  const combinedStyle = Object.assign({},style,{
    display: iconIsVisible ? "block" : "none"
  });

  return (
    <div className={`IconButton ${extraClass}`}
         title={onHoverText}
         style={combinedStyle}
    >
      {faClass ? <i className={`fa ${faClass}`} onClick={onClick}/> : null}
      {children}
    </div>
  );
};

Icon.propTypes = {
  onHoverText: PropTypes.string,
  faClass: PropTypes.string,
  style: PropTypes.object,
  iconIsVisible: PropTypes.bool.isRequired,
  extraClass: PropTypes.string
};

Icon.defaultProps = {
  style: {},
  extraClass: ""
};

export default Icon;
