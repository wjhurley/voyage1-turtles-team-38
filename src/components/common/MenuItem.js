import React from 'react';
import PropTypes from 'prop-types';

import './MenuItem.css';

const MenuItem = ({children, onClick}) => {
  return (
    <button onClick={onClick} className="MenuItem">
      {children}
    </button>
  );
};

MenuItem.propsTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuItem;
