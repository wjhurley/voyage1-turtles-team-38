import React from 'react';
import PropTypes from 'prop-types';

const WeatherError = ({message}) => {
  return (
    <div>
      Cannot retrieve weather:<br/> "{message}"
    </div>
  );
};

WeatherError.propTypes = {
  message: PropTypes.string.isRequired
};

export default WeatherError;
