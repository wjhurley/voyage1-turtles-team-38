import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  CLEAR_TODO
} from '../actions/actionTypes';

import {REHYDRATE} from 'redux-persist/constants';

import {updateObject, appendArray} '../utils/index';

const initialState = {
  items: [
    {
      task: "test task number one",
      completed: false
    },
    {
      task: "test task number two",
      completed: false
    },
    {
      task: "test task number three",
      completed: true
    }
  ]
};

export default (todo = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      let newTodo = {
        task: action.task,
        completed: action.completed
      }
      return appendArray(todo, newTodo);
    case COMPLETE_TODO:
      newState.items[action.index].completed = true;
      return newState;
    case DELETE_TODO:
      let items = [].concat(newState.items);
      items.splice(action.index, 1);
      return Object.assign({}, newState, {
        items: items
      });
    case CLEAR_TODO:
      return Object.assign({}, newState, {
        items: []
      });
    default:
      return newState;
  }
}
