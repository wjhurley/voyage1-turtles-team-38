import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleNoteVisibility, updateNoteContent } from "../../actions/noteActions";

import Widget from '../common/Widget';

import NoteIcon from './NoteIcon';
import NoteModal from './NoteModal';

const NoteWidget = ({note, onIconClick, onContentChange}) => {
  const {noteIconIsVisible, noteIsVisible, content} = note;

  const renderIcon = () => {
    return noteIconIsVisible ?
      <NoteIcon
        onIconClick={onIconClick}
      />
      : null;
  };

  const renderModal = () => {
    return noteIsVisible ? <NoteModal
      onContentChange={onContentChange}
      content={content}
    /> : null;
  };

  return (
    <Widget
      yPosition="bottom"
      xPosition="right"
      xOffset={10}
    >
      {renderModal()}
      {renderIcon()}
    </Widget>
  );
};

NoteWidget.propTypes = {
  onIconClick: PropTypes.func.isRequired
};

function mapStateToProps({note}) {
  return {note};
}

function mapDispatchToProps(dispatch) {
  return {
    onIconClick: () => {
      dispatch(toggleNoteVisibility());
    },
    onContentChange: content => {
      dispatch(updateNoteContent(content))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteWidget);
