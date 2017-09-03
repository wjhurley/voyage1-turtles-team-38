import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleModalVisibility } from "../../actions/noteActions";

import Widget from '../common/Widget';

import NoteIcon from './NoteIcon';
import NoteModal from './NoteModal';

const NoteWidget = ({notes, onIconClick}) => {
  const {iconIsVisible, modalIsVisible} = notes;

  const renderIcon = () => {
    return iconIsVisible ?
      <NoteIcon
        onIconClick={onIconClick}
      />
      : null;
  }

  const renderModal = () => {
    return modalIsVisible ? <NoteModal /> : null;
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

};

function mapStateToProps({notes}) {
  return {notes};
}

function mapDispatchToProps(dispatch) {
  return {
    onIconClick: () => {
      dispatch(toggleModalVisibility());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteWidget);
