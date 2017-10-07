import {
  LINKS_ADD,
  LINKS_SAVE_FROM_STRING,
} from '../actions/actionTypes';

import {REHYDRATE} from 'redux-persist/constants';

import {appendArray} from '../utils/index';

const initialState = [
  {title: 'Google', url: 'https://google.com'},
  {title: 'YouTube', url: 'https://youtube.com'},
  {title: 'Leoh', url: 'https://leoh.io'},
];

// selector to get line-delimited string from object for form in options
export function getLinksAsString(state) {
  return state.reduce((acc, item) => {
    return `${acc}${item.title}\n${item.url}\n`;
    //trim any final newline
  }, '').slice(0,-1);
}

//parses links from a new-line delimited string where even lines are titles, odd lines are url for preceding title
function parseLinksFromString(string = '') {
  //split on new lines, then remove any empty lines
  const lines = string.split(/\r?\n/).filter(line => line);
  let title;
  return lines.reduce((acc, item, idx) => {
    // even index is title
    if (idx % 2 === 0) {
      title = item;
      return acc;
      // odd index is url
    } else {
      return acc.concat({title, url: item});
    }
  }, []);
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      // on first load with empty local storage will be undefined
      return action.payload.links ? action.payload.links : initialState;
    case LINKS_ADD:
      return appendArray(state, action.newLink);
    case LINKS_SAVE_FROM_STRING:
      return parseLinksFromString(action.links);
    default:
      return state;
  }
}
