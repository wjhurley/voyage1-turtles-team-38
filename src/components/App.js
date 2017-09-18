import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import axios from 'axios';

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

  // fetchImage() {
  //   let image;
  //   axios.get("https://api.unsplash.com/collections/1194376/photos/?client_id=50bb0aa059c83c9c3338c46f60256f2c8d1a24952948a7b9903d2abf1e67a778")
  //     .then(function(response) {
  //       let rand = Math.floor(Math.random() * response.data.length),
  //           arr = Array.from(response.data);
  //       image = `url(${arr[rand].urls.raw})`;
  //       console.log(image);
  //       return image ? image : "url(http://i.imgur.com/HXyY3vl.jpg)";
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  //   return false;
  // }

  componentDidMount() {
    const {dispatch} = this.props; // passed by default with connect
    dispatch(fetchWeather());
    dispatch(fetchImage());
    console.log(this.props.background);
  }

  renderPhotoInfo() {
    console.log(this.props.background);
    if(this.props.background) {
      return (
        <p className="unsplash">
          Photo by <a href={this.props.background.user.links.html}>{this.props.background.user.name}</a>/<a href="https://unsplash.com">Unsplash</a>
        </p>
      );
    }
    return null;
  }
  renderBackground() {
    if(this.props.background) {
      return this.props.background.urls.raw;
    }
    return null;
  }

  render() {
    console.log(this.props.background);

    return (
      <div
        className="App"
        style={{backgroundImage: this.renderBackground ? this.renderBackground() : "url(https://source.unsplash.com/collection/1194376/1600x900)"}}
      >
        <LinksWidget/>
        <ZenWidget/>
        <WeatherWidget/>
        <ClockWidget />
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
