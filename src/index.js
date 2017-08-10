import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import 'open-weather-icons/dist/css/open-weather-icons.css';
import 'font-awesome/css/font-awesome.min.css';

import './styles/normalize.css';
import './styles/index.css';

import App from './components/App';
import reducers from './reducers';

// Also configure store here

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {}, composeEnhancers(
  applyMiddleware(reduxThunk)
));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
