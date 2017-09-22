import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';

const Menu = ({width, children}) => {
  return (
    <div style={{
      width
    }}
         className="Menu">
      {children}
    </div>
  );
};

Menu.propTypes = {
  width: PropTypes.string,
};

Menu.defaultProps = {
  width: '180px',
};

export default Menu;
