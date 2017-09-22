import {
  OPTIONS_SAVE,
} from '../actions/actionTypes';

import {REHYDRATE} from 'redux-persist/constants';

import {updateObject} from '../utils/index';

// this is the initial state prior to rehydrating AKA defaults
const initialSate = {
  //general
    theme: 'default',
    quotes: 'show',
    allHide: false,
    newsHide: true,
    newsActiveOnOpen: false,
    newsSource: 'default',
    newsSourceRssUrl: 'RSS URL',
    noteHide: false,
    noteActiveOnOpen: false,
    searchHide: true,
    searchActiveOnOpen: false,
    linksHideIcon: false,
    linksActiveOnOpen: false,
    topVisitedHideIcon: true,
    topVisitedActiveOnOpen: false,
  //weather
    weatherUnits: 'F',
    weatherLocation: 'geolocation',
    weatherCustomLocationValue: 'Austin, TX or 27514',
    weatherHideIcon: false,
    weatherActiveOnOpen: false,
  //background
    backgroundSource: 'randomImage',
  //todos
    todosHideIcon: false,
    todosActiveOnOpen: false,
  //clock
    clockType: '12', //12 vs 24
    clockAmPm: 'hide',
    clockDate: 'hide',
    clockHide: false,
    clockTransparency: 90,
    clockBold: false,
};

export default (state = initialSate, action) => {
  switch (action.type) {
    case REHYDRATE:
      const options = action.payload.options;
      return updateObject(state, options);
    case OPTIONS_SAVE:
      return action.savedOptions;
    default:
      return state;
  }
}
