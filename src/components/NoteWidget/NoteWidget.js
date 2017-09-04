import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleNoteVisibility } from "../../actions/noteActions";

import Widget from '../common/Widget';

import NoteIcon from './NoteIcon';
import NoteModal from './NoteModal';

const NoteWidget = ({notes, onIconClick}) => {
  const {noteIconIsVisible, noteIsVisible} = notes;

  const renderIcon = () => {
    return noteIconIsVisible ?
      <NoteIcon
        onIconClick={onIconClick}
      />
      : null;
  }

  const renderModal = () => {
    return noteIsVisible ? <NoteModal /> : null;
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

function mapStateToProps({notes}) {
  return {notes};
}

function mapDispatchToProps(dispatch) {
  return {
    onIconClick: () => {
      dispatch(toggleNoteVisibility());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteWidget);
