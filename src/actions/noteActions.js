import {
  NOTE_CONTENT_UPDATE
} from './actionTypes';

export function updateNoteContent(content) {
  return {
    type: NOTE_CONTENT_UPDATE,
    content
  }
}
