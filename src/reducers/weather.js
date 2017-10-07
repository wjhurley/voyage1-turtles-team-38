import {
  WEATHER_FETCH_SUCCESS,
  WEATHER_FETCH_FAILURE,
} from '../actions/actionTypes';

import {updateObject} from '../utils/index';

export default (state = {}, action) => {
  switch (action.type) {
    case WEATHER_FETCH_SUCCESS:
      return updateObject(state, {data: action.data});
    case WEATHER_FETCH_FAILURE:
      return updateObject(state, {error: action.error});
    default:
      return state;
  }
}
