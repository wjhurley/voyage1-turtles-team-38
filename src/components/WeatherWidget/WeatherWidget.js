import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment';

import * as weatherActions from '../../actions/weatherActions';

import './WeatherWidget.css';

import SlidingWidget from '../common/SlidingWidget';
import WidgetBody from '../common/SlidingWidgetBody';
import WidgetHeader from '../common/SlidingWidgetHeader';
import IconButton from '../common/IconButton';

const WeatherIcon = ({iconIsVisible, condition, city}) => {
  return (
    <IconButton
      onHoverText="Weather"
      iconIsVisible={iconIsVisible}
    >
      <div className="weather-conditions">
        <i className={`owi ${condition.owiCode}`} title={condition.text}/>
        <span className="weather-temp">  {condition.temp}&deg;</span>
      </div>
      <div className="weather-city">{city}</div>
    </IconButton>
  );
};

WeatherIcon.propTypes = {
  iconIsVisible: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  condition: PropTypes.shape({
    text: PropTypes.string.isRequired,
    temp: PropTypes.string.isRequired,
    owiCode: PropTypes.string.isRequired,
  }).isRequired,
};

const WeatherCell = ({day, conditionText, owiCode, high, low}) => {
  return (
    <div className="Weather-cell">
      <div className="day">
        {moment(new Date(day).toISOString()).format('ddd')}
      </div>
      <div className="conditions">
        <i className={`owi ${owiCode}`} title={conditionText}/>
      </div>
      <div className="range"><span>{high}</span>
        <pre> </pre>
        <span>{low}</span></div>
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

const WeatherBody = ({today, forecast}) => {
  return (
    <WidgetBody>
      <div className="weather-today">
        <div>Today is {today}</div>
        <hr/>
      </div>
      <div className="weather-forecast">{forecast.map(day => {
        return (<WeatherCell
          key={day.date}
          day={day.date}
          conditionText={day.text}
          owiCode={day.owiCode}
          high={day.high}
          low={day.low}
        />);
      })}
      </div>
    </WidgetBody>
  );
};

WeatherBody.propTypes = {
  today: PropTypes.string.isRequired,
  forecast: PropTypes.array.isRequired,
};

class WeatherWidget extends Component {

  componentDidMount() {
    // Only fetch weather if there is no weather data already (i.e. on initial load)
    if (!this.props.weather.data) {
      this.props.actions.fetchWeather(this.props.weatherUnits);
    }
  }

  render() {
    const {
      weather,
      allHide,
      weatherHideIcon,
      weatherActiveOnOpen,
      // weatherLocation,
      // weatherCustomLocationValue,
    } = this.props;

    const {data, error} = weather;

    if (!data && !error) {
      return null;
    }

    //TODO:
    //More graceful error handling? Default to some location or use IP?
    //need to do in redux action

    if (!data) {
      return <div style={{fontSize: '8px'}}>{error.errorMessage}</div>;
    }
    return (
      <SlidingWidget
        yPosition="top"
        xPosition="right"
        activeOnOpen={weatherActiveOnOpen}
        showArrowOnIconHover={true}
        widgetIcon={<WeatherIcon
          iconIsVisible={!allHide && !weatherHideIcon}
          city={data.location.city} condition={data.condition}
        />}
        widgetHeader={<WidgetHeader header="Weather Forecast"/>}
        widgetBody={<WeatherBody
          today={data.today}
          forecast={data.forecast}
        />}
      />
    );
  }
}

function mapStateToProps(
  {
    weather,
    options:
      {
        allHide,
        weatherHideIcon,
        weatherActiveOnOpen,
        weatherUnits,
        weatherLocation,
        weatherCustomLocationValue,
      },
  }) {
  return {
    weather,
    allHide,
    weatherHideIcon,
    weatherActiveOnOpen,
    weatherUnits,
    weatherLocation,
    weatherCustomLocationValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(weatherActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherWidget);
