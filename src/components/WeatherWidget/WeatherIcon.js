import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Icon from '../common/Icon';
import WeatherIconArrow from './WeatherIconArrow';

import './WeatherIcon.css';

class WeatherIcon extends Component {
  // visibility of down arrow should be handled locally
  // therefore need to make this presentational component class-based
  constructor(props) {
    super(props);
    this.state = {arrowIsHidden: true};
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnMouseEnter() {
    this.setState({arrowIsHidden: false});
  }

  handleOnMouseLeave() {
    this.setState({arrowIsHidden: true});
  }

  render() {

    const { onIconClick, city, condition } = this.props;
    const { arrowIsHidden } = this.state;

    return (
      <div onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
        <Icon onHoverText="Weather" onIconClick={onIconClick}>
          <div className="weather-conditions">
            <i className={`owi ${condition.owiCode}`} title={condition.text}/>
            <span className="weather-temp">  {condition.temp}&deg;</span>
          </div>
          <div className="weather-city">{city}</div>
        </Icon>
        <WeatherIconArrow hidden={arrowIsHidden} />
      </div>
    );
  }
}

WeatherIcon.propTypes = {
  onIconClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  condition: PropTypes.shape({
    text: PropTypes.string.isRequired,
    temp: PropTypes.string.isRequired,
    owiCode: PropTypes.string.isRequired
  }).isRequired
};

export default WeatherIcon;
