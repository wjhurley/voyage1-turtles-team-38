import {
  OPTIONS_SAVE,
} from './actionTypes'

export function saveOptions(savedOptions) {
  return {
    type: OPTIONS_SAVE,
    savedOptions,
  }
}
