import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  CLEAR_TODO
} from './actionTypes';

export function addTodo(task) {
  return {
    type: ADD_TODO,
    task: task,
    completed: false
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index: index
  };
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    index: index
  };
}

export function clearTodo() {
  return {
    type: CLEAR_TODO
  };
}
