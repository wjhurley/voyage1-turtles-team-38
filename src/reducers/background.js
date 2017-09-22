import {
  BACKGROUND_IMAGE_FETCH_SUCCESS,
  BACKGROUND_IMAGE_FETCH_FAILURE,
} from '../actions/actionTypes';

import {updateObject} from '../utils/index';

export default (state = {}, action) => {
  switch (action.type) {
    case BACKGROUND_IMAGE_FETCH_SUCCESS:
      return updateObject(state, {
        imageData: action.imageData,
      });
    case BACKGROUND_IMAGE_FETCH_FAILURE:
      return updateObject(state, {
        errorMessage: action.errorMessage
      });
    default:
      return state;
  }
}
