import React from 'react';
import PropTypes from 'prop-types';
import './MenuItemIcon.css';

const MenuItemIcon = ({faClass}) => {
  return (<i className={`MenuItemIcon fa ${faClass}`}/>);
};

MenuItemIcon.propsTypes = {
  faClass: PropTypes.string.isRequired,
};

export default MenuItemIcon;
