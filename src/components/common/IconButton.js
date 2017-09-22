import React from 'react';
import PropTypes from 'prop-types';

import './IconButton.css';

const Icon = ({onHoverText, faClass, iconIsVisible, style, children}) => {
  const combinedStyle = Object.assign({},style,{
    display: iconIsVisible ? "block" : "none"
  });

  return (
    <div className="IconButton"
         title={onHoverText}
         style={combinedStyle}
    >
      {faClass ? <i className={`fa ${faClass}`}/> : null}
      {children}
    </div>
  );
};

Icon.propTypes = {
  onHoverText: PropTypes.string,
  faClass: PropTypes.string,
  style: PropTypes.object,
  iconIsVisible: PropTypes.bool.isRequired,
};

Icon.defaultProps = {
  style: {},
};

export default Icon;
