import { combineReducers } from 'redux';
import background from './background';
import weather from './weather';
import note from './note';
import options from './options';
import links from './links';

// each reducer will be associated with a piece of the app's functionality
// with the store's single state tree having being composed similarly, for example:
// store.todos, store.weather, store.auth (for calendar), etc

// note that the settings component will interact with all of the different store sub-objects

export default combineReducers({
  background,
  weather,
  note,
  options,
  links,
});
