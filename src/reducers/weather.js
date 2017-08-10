import {combineReducers} from 'redux';

const data = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_SUCCESS':
      return action.data;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_FAILURE':
      return action.errorMessage;
    default:
      return state;
  }
};

const iconIsVisible = (state = true, action) => {
  switch (action.type) {
    case 'TOGGLE_ICON_VISIBILITY':
      return !state;
    default:
      return state;
  }
};

const modalIsVisible = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL_VISIBILITY':
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  data,
  errorMessage,
  iconIsVisible,
  modalIsVisible
});
