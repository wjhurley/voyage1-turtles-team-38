import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchWeather} from "../actions/weatherActions";

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
  }

  render() {
    return (
      <div className="App">
        <LinksWidget />
        <ZenWidget />
        <WeatherWidget />
        <ClockWidget />
        <OptionsWidget />
        <CalendarWidget />
        <NoteWidget />
        <TodoWidget />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(App);
