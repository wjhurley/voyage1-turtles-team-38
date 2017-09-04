import { combineReducers } from 'redux';

const noteIconIsVisible = (state = true, action) => {
  switch(action.type) {
    case 'TOGGLE_NOTE_ICON_VISIBILITY':
      return !state;
    default:
      return state;
  }
};

const noteIsVisible = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_NOTE_VISIBILITY':
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  noteIconIsVisible,
  noteIsVisible
});
