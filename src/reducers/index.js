import { combineReducers } from 'redux';
import todos from './todos';

// each reducer combined is a property object of the single store object
// we will have store.todos, store.weather, store.auth (for calendar), etc

export default combineReducers({
  todos
});
