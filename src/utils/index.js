// source: http://redux.js.org/docs/recipes/reducers/RefactoringReducersExample.html#extracting-utility-functions

export function updateObject(oldObject, newValues) {
  // use Object.assign to correctly copy data instead of mutating
  return Object.assign({}, oldObject, newValues);
}

export function appendArray(oldArray, newItem) {
  // use [].concat to correclty copy data instead of mutating
  return [].concat(oldArray,newItem);
}
