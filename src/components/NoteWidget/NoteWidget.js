import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleModalVisibility } from "../../actions/noteActions";

import Widget from '../common/Widget';

import NoteModal from './NoteModal';

const NoteWidget = ({notes}) => {
  const {iconIsVisible, modalIsVisible} = notes;
  const renderModal = () => {
    return modalIsVisible ? <NoteModal /> : null;
  };

  return (
    <Widget
      yPosition="bottom"
      xPosition="right"
      xOffset={10}
    >
      Notes
      {renderModal()}
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
