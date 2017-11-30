import {
  ADD_TODO,
  DELETE_TODO,
  COUNT_TODOS,
  TODOS_SAVE_FROM_STRING
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

export function saveTodosFromString(todos) {
  return {
    type: TODOS_SAVE_FROM_STRING,
    todos
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
