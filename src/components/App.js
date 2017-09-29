import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchWeather} from "../actions/weatherActions";
import {fetchImage} from "../actions/backgroundActions";

import LinksWidget from './LinksWidget';
import ZenWidget from './ZenWidget';
import WeatherWidget from './WeatherWidget';
import ClockWidget from './ClockWidget';
import OptionsWidget from './OptionsWidget';
import CalendarWidget from './CalendarWidget';
import NoteWidget from './NoteWidget';
import TodoWidget from './TodoWidget';

import './App.css';

class App extends Component {

  componentDidMount() {
    const {dispatch} = this.props; // passed by default with connect
    dispatch(fetchWeather());
    dispatch(fetchImage());
  }

  renderPhotoInfo() {
    const {backgroundSuccess} = this.props.background;
    if (backgroundSuccess) {
      return (
        <p className="unsplash">
          Photo by <a target="_blank"
                      rel="noopener noreferrer"
                      href={backgroundSuccess.userProfile}>{backgroundSuccess.userName}</a> / <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com?utm_source=leoh_clone&utm_medium=referral&utm_campaign=api-credit">Unsplash</a>
        </p>
      );
    }
    return null;
  }

  renderBackground() {
    const {backgroundSuccess} = this.props.background;
    if (backgroundSuccess) {
      return `url(${backgroundSuccess.imageUrl})`;
    }
    // default image on unplash API failure
    return "url(https://source.unsplash.com/collection/1194376/1600x900)";
  }

  render() {
    return (
      <div
        className="App"
        style={{backgroundImage: this.renderBackground()}}
      >
        <LinksWidget/>
        <ZenWidget/>
        <WeatherWidget/>
        <ClockWidget/>
        <OptionsWidget/>
        <CalendarWidget/>
        <NoteWidget/>
        <TodoWidget/>
        {this.renderPhotoInfo()}
      </div>
    );
  }
}

function mapStateToProps({background}) {
  return {background};
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(App);
