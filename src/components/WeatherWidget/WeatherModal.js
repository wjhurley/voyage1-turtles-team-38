import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../common/Modal';
import WeatherCell from './WeatherCell';

import './WeatherModal.css';

const WeatherModal = ({today, forecast}) => {
  return (
    <Modal header="Weather Forecast">
      <div className="weather-today">Today is {today}</div>
      <hr/>
      <div className="weather-forecast">{forecast.map(day => {
        return (<WeatherCell
          key={day.date}
          day={day.date}
          conditionText={day.text}
          owiCode={day.owiCode}
          high={day.high}
          low={day.low}
        />)
      })}</div>
    </Modal>
  );
};

WeatherModal.propTypes = {
  today: PropTypes.string.isRequired,
  forecast: PropTypes.array.isRequired
};

export default WeatherModal;
