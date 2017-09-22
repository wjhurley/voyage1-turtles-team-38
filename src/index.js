import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import reduxThunk from 'redux-thunk';

import 'open-weather-icons/dist/css/open-weather-icons.css';
import 'font-awesome/css/font-awesome.min.css';

import './styles/normalize.css';
import './styles/index.css';

import reducers from './reducers';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  {},
  composeEnhancers(
    applyMiddleware(reduxThunk),
  ),
);

// don't want to render anything until rehydrating state
// source: https://github.com/rt2zz/redux-persist/blob/master/docs/recipes.md
class AppProvider extends Component {
  constructor() {
    super();
    this.state = {rehydrated: false};
  }

  componentWillMount() {
    persistStore(
      store,
      // named reducers to persist in store
      // don't want to persist API related (e.g. weather)
      {whitelist: ['options', 'note', 'links']},
      // callback after rehydration finished
      () => this.setState({rehydrated: true}),
    );
  }

  render() {
    if (!this.state.rehydrated) {
      return null;
    }
    return (
      <Provider store={store}><App/></Provider>
    );
  }
}

ReactDOM.render(
  <AppProvider/>,
  document.getElementById('root'),
);
