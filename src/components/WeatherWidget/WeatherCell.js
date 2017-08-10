import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import './WeatherCell.css';

const WeatherCell = ({day, conditionText, owiCode, high, low}) => {
  return (
    <div className="Weather-cell">
      <div className="day">{moment(new Date(day).toISOString()).format('ddd')}</div>
      <div className="conditions">
        <i className={`owi ${owiCode}`} title={conditionText}/>
      </div>
      <div className="range">{high} {low}</div>
    </div>
  );
};

WeatherCell.propTypes = {
  day: PropTypes.string.isRequired,
  conditionText: PropTypes.string.isRequired,
  owiCode: PropTypes.string.isRequired,
  high: PropTypes.string.isRequired,
  low: PropTypes.string.isRequired,
};

export default WeatherCell;
