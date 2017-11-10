import {REHYDRATE} from 'redux-persist/constants';

import {
  ADD_TODO,
  DELETE_TODO,
  COUNT_TODOS
} from '../actions/actionTypes';

import {updateObject, appendArray, removeItemFromArray} from '../utils/index';

const initialState = {
  todoCount: 0,
  tasks: []
};

export default (todo = initialState, action) => {
  let newTasks;
  switch(action.type) {
    case REHYDRATE:
      return action.payload.todos ? action.payload.todos : initialState;
    case ADD_TODO:
      let newTodo = {
        task: action.task,
        completed: action.completed
      };
      newTasks = appendArray(todo.tasks, newTodo);
      return updateObject(todo, {tasks: newTasks});
    case DELETE_TODO:
      newTasks = removeItemFromArray(todo.tasks, action.index);
      return updateObject(todo, {tasks: newTasks});
    case COUNT_TODOS:
      let incompleteTodos = todo.tasks.filter(task => {
        return !task.completed;
      });
      return updateObject(todo, {todoCount: incompleteTodos.length});
    // case COMPLETE_TODO:
    //   newState[action.index].completed = true;
    //   return newState;
    // case CLEAR_TODO:
    //   return updateObject(todo, []);
    default:
      return todo;
  }
}
