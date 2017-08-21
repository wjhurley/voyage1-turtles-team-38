import React from 'react';
import PropTypes from 'prop-types';

import './WeatherArrow.css';

const WeatherArrow = ({hidden}) => {
  return (
    <div className="weather-arrow"
         style={{visibility: hidden ? "hidden": "visible" }}>
      <i className="fa fa-angle-down"/>
    </div>
  );
};

WeatherArrow.propTypes = {
  hidden: PropTypes.bool.isRequired
};

export default WeatherArrow;
