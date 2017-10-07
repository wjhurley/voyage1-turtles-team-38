import {REHYDRATE} from 'redux-persist/constants';

import {
  NOTE_CONTENT_UPDATE,
} from '../actions/actionTypes';

import {updateObject} from '../utils/index';

const initialState = {
  content: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      const note = action.payload.note;
      return updateObject(state, note);
    case NOTE_CONTENT_UPDATE:
      return updateObject(state, {
        content: action.content,
      });
    default:
      return state;
  }
};
