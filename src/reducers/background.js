import {combineReducers} from 'redux';

const backgroundSuccess = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_IMAGE_SUCCESS':
      return action.backgroundData;
    default:
      return state;
  }
};

const backgroundFailure = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_IMAGE_FAILURE':
      return action.errorMessage;
    default:
      return state;
  }
};

export default combineReducers({
  backgroundSuccess,
  backgroundFailure
});
