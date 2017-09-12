import {
  NOTE_ICON_TOGGLE_VISIBILITY,
  NOTE_TOGGLE_VISIBILITY,
  NOTE_CONTENT_UPDATE
} from '../actions/actionTypes';

const initialState = {
  noteIconIsVisible: true,
  noteIsVisible: false,
  content: ""
};

export default (note = initialState, action) => {
  switch (action.type) {
    case NOTE_TOGGLE_VISIBILITY:
      return Object.assign({}, note, {
        noteIsVisible: !note.noteIsVisible
      });
    case NOTE_ICON_TOGGLE_VISIBILITY:
      return Object.assign({}, note, {
        noteIconIsVisible: !note.noteIconIsVisible
      });
    case NOTE_CONTENT_UPDATE:
      return Object.assign({}, note, {
        content: note.content
      });
    default:
      return note;
  }
};
