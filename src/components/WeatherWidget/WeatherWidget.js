import React from 'react';
import { connect } from 'react-redux';

import { toggleModalVisibility } from "../../actions/weatherActions";

import Widget from '../common/Widget';

import WeatherIcon from './WeatherIcon';
import WeatherModal from './WeatherModal';
import WeatherError from './WeatherError';

// From redux perspective, WeatherWidget is "container component" as it is aware of redux
// However, because it does not need to use React lifecycle hooks or local state it can be stateless function

const WeatherWidget = ({weather, onIconClick}) => {

    const {data, errorMessage, iconIsVisible, modalIsVisible} = weather;

    const renderIcon = () => {
      if (errorMessage) {
        return <WeatherError message={errorMessage}/>;
      }
      if (data) {
        return iconIsVisible ?
          <WeatherIcon
            city={data.location.city}
            condition={data.condition}
            onIconClick={onIconClick}
          />
          : null;
      }
      //don't render anything if not returned
      return null;
    };

    const renderModal = () => {
      return modalIsVisible ? <WeatherModal today={data.today} forecast={data.forecast}/> : null;
    };

    return (
      <Widget yPosition="top"
                   xPosition="right">
      {renderIcon()}
      {renderModal()}
    </Widget>
    );
};

function mapStateToProps({weather}) {
  return {weather}
}

function mapDispatchToProps(dispatch) {
  return {
    onIconClick: () => {
      dispatch(toggleModalVisibility());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherWidget);
