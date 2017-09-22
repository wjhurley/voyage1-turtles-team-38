import axios from 'axios';
import moment from 'moment';

import {
  WEATHER_FETCH_FAILURE,
  WEATHER_FETCH_SUCCESS,
} from './actionTypes';

import mapWeatherIcon from './mapWeatherIcon';

function getCoordinates() {
  // return as promise so can use async/await
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      coords => resolve(coords),
      err => reject(err),
      {enableHighAccuracy: true, timeout: 5000, maximumAge: 0}
    );
  });
}

async function fetchYahooWeather(units, customLocation) {
  try {
    let yqlSubQuery;
    if (customLocation) {
      yqlSubQuery = `SELECT woeid FROM geo.places(1) WHERE text="(${customLocation})"`;
    } else {
      const position = await getCoordinates();
      const {latitude, longitude} = position.coords;
      yqlSubQuery = `SELECT woeid FROM geo.places(1) WHERE text="(${latitude},${longitude})"`;
    }
    const endpoint = `https://query.yahooapis.com/v1/public/yql?q=SELECT location, item.condition, item.forecast FROM weather.forecast WHERE u = "${units.toLowerCase()}" AND woeid IN (${yqlSubQuery})&format=json`;
    const res = await axios.get(endpoint);
    const location = res.data.query.results.channel[0].location;
    const condition = Object.assign(
      res.data.query.results.channel[0].item.condition,
      {owiCode: mapWeatherIcon(res.data.query.results.channel[0].item.condition.code)}
    );
    const today = moment(new Date(res.data.query.results.channel[0].item.condition.date).toISOString())
      .format("ddd, Do of MMMM, YYYY");
    const forecast = res.data.query.results.channel.map(el => {
      return Object.assign(
        el.item.forecast,
        {owiCode: mapWeatherIcon(el.item.forecast.code)}
      );
    });
    return {location, condition, forecast, today};
  } catch (err) {
    throw err;
  }
}

export function fetchWeather(units = "f", customLocation = null) {
  return async dispatch => {
    try {
      const weatherData = await fetchYahooWeather(units, customLocation);
      dispatch({
        type: WEATHER_FETCH_SUCCESS,
        data: weatherData,
      });
    } catch (err) {
      dispatch({
        type: WEATHER_FETCH_FAILURE,
        error: {errorMessage: err.message || 'Unknown error'}
      });
    }
  }
}

