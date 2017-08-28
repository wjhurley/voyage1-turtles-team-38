import { combineReducers } from 'redux';

const iconIsVisible = (state = true, action) => {
  switch(action.type) {
    case 'TOGGLE_ICON_VISIBILITY':
      return !state;
    default:
      return state;
  }
};

const modalIsVisible = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_MODAL_VISIBILITY':
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  iconIsVisible,
  modalIsVisible
});
