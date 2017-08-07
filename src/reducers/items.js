export function todoComponent(state = null, action) {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case 'ADD_TODO':
      newState.todo.items.push({
        message: action.message,
        completed: false
      });

      return newState;

    case 'COMPLETE_TODO':
      newState.todo.items[action.index].completed = true;

      return newState;

    case 'DELETE_TODO':
      let items = [].concat(state.todo.items);

      items.splice(action.index, 1);

      return Object.assign({}, state, {
        todo: {
          items: items
        }
      });

    case 'CLEAR_TODO':
      return Object.assign({}, state, {
        todo: {
          items: []
        }
      });

    default:
      return state;
  }
}
