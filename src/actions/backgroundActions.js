import axios from 'axios';

async function fetchUnsplashImage() {
  try {
    let imageData;
    const res = await axios.get("https://api.unsplash.com/collections/1194376/photos/?client_id=50bb0aa059c83c9c3338c46f60256f2c8d1a24952948a7b9903d2abf1e67a778")
    const rand = Math.floor(Math.random() * res.data.length);
    const arr = Array.from(res.data);
    // image = `url(${arr[rand].urls.raw})`;
    imageData = arr[rand];
    const userName = imageData.user.name;
    const userProfile = imageData.user.links.html;
    const imageUrl = imageData.urls.raw;
    console.log(userName + "\n" + userProfile + "\n" + imageUrl);
    return {userName, userProfile, imageUrl};
  } catch (err) {
    throw err;
  }
}

export function fetchImage() {
  return async dispatch => {
    try {
      const backgroundImageData = await fetchUnsplashImage();
      console.log(backgroundImageData);
      dispatch({
        type: 'FETCH_IMAGE_SUCCESS',
        backgroundData: backgroundImageData
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_IMAGE_FAILURE',
        errorMessage: err.message || 'Unknown error'
      });
    }
  }
}
