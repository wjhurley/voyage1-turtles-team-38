import {
  ADD_TODO,
  DELETE_TODO,
  COUNT_TODOS
} from './actionTypes';

export function addTodo(task) {
  return {
    type: ADD_TODO,
    task: task,
    completed: false
  };
}

export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    index: index
  };
}

export function countTodos() {
  return {
    type: COUNT_TODOS
  };
}

// export function completeTodo(index) {
//   return {
//     type: COMPLETE_TODO,
//     index: index
//   };
// }
//
// export function clearTodo() {
//   return {
//     type: CLEAR_TODO
//   };
// }
