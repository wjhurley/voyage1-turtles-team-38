import React from 'react';
import PropTypes from 'prop-types';

import './Icon.css';

const Icon = ({onIconClick, onHoverText, faClass, children}) => {
  return (
    <div className="Icon"
         title={onHoverText}
         onClick={onIconClick}
    >
      {faClass ? <i className={`fa ${faClass}`}/> : null}
      {children}
    </div>
  );
};

Icon.propTypes = {
  onIconClick: PropTypes.func,
  onHoverText: PropTypes.string,
  faClass: PropTypes.string
};

export default Icon;
