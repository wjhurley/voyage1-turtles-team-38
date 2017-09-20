import {
  NOTE_TOGGLE_VISIBILITY,
  NOTE_ICON_TOGGLE_VISIBILITY,
  NOTE_CONTENT_UPDATE
} from './actionTypes';

export function toggleNoteVisibility() {
  return {
    type: NOTE_TOGGLE_VISIBILITY
  };
}

export function toggleNoteIconVisibility() {
  return {
    type: NOTE_ICON_TOGGLE_VISIBILITY
  };
}

export function updateNoteContent(content) {
  return {
    type: NOTE_CONTENT_UPDATE,
    content
  }
}
