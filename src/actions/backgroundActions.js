import axios from 'axios';

import {
  BACKGROUND_IMAGE_FETCH_FAILURE,
  BACKGROUND_IMAGE_FETCH_SUCCESS,
} from './actionTypes';

async function fetchUnsplashImage() {
  try {
    let imageData;
    const res = await axios.get(
      'https://api.unsplash.com/collections/1194376/photos/?client_id=50bb0aa059c83c9c3338c46f60256f2c8d1a24952948a7b9903d2abf1e67a778');
    const rand = Math.floor(Math.random() * res.data.length);
    const arr = Array.from(res.data);
    imageData = arr[rand];
    const userName = imageData.user.name;
    const userProfile = imageData.user.links.html +
      '?utm_source=leoh_clone&utm_medium=referral&utm_campaign=api-credit';
    // TODO:
    // * [ ] - gracefully handle error (in action) OR switch to public api?
    // * [ ] - add random color function in reducer
    // * [ ] - try optimizing with full for better quality image (end of project)
    const imageUrl = imageData.urls.regular;
    return {userName, userProfile, imageUrl};
  } catch (err) {
    throw err;
  }
}

export function fetchImage() {
  return async dispatch => {
    try {
      const imageData = await fetchUnsplashImage();
      dispatch({
        type: BACKGROUND_IMAGE_FETCH_SUCCESS,
        imageData,
      });
    } catch (err) {
      dispatch({
        type: BACKGROUND_IMAGE_FETCH_FAILURE,
        errorMessage: err.message || 'Unknown error',
      });
    }
  };
}
