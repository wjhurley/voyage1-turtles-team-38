import {REHYDRATE} from 'redux-persist/constants';

import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  CLEAR_TODO
} from '../actions/actionTypes';

import {updateObject, appendArray, removeItemFromArray} from '../utils/index';

const initialState = [
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
  },
  {
    task: "test task number four",
    completed: true
  },
  {
    task: "test 5",
    completed: false
  },
  {
    task: "test 6",
    completed: false
  },
  {
    task: "test 7",
    completed: true
  },
  {
    task: "test 8",
    completed: false
  }
];

export default (todo = initialState, action) => {
  const newState = [].concat(todo);
  switch(action.type) {
    case REHYDRATE:
      return action.payload.todos ? action.payload.todos : initialState;
    case ADD_TODO:
      let newTodo = {
        task: action.task,
        completed: action.completed
      };
      return appendArray(todo, newTodo);
    case COMPLETE_TODO:
      newState[action.index].completed = true;
      return newState;
    case DELETE_TODO:
      return removeItemFromArray(todo, action.index);
    case CLEAR_TODO:
      return updateObject(todo, []);
    default:
      return todo;
  }
}
