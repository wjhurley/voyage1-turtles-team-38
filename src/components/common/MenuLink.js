import React from 'react';
import PropTypes from 'prop-types';

import "./MenuItem.css";

const MenuLinkItem = ({url, children}) => {

  return (
    <a className="MenuItem"
      rel="noopener noreferrer"
       target="_blank"
       href={url}
    >
      {children}
    </a>
  )
};

MenuLinkItem.propsTypes = {
  url : PropTypes.string.isRequired,
};

export default MenuLinkItem;
