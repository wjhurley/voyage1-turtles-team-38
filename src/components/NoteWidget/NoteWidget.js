import React from 'react';
import {connect} from 'react-redux';

import {updateNoteContent} from '../../actions/noteActions';

import SlidingWidget from '../common/SlidingWidget';
import WidgetBody from '../common/SlidingWidgetBody';
import WidgetHeader from '../common/SlidingWidgetHeader';
import IconButton from '../common/IconButton';
import TextArea from '../common/Inputs/TextArea';

const NoteBody = ({content, updateNote}) => {
  return (
    <WidgetBody header="Notes">
      <TextArea
        name="notes"
        value={content}
        onChange={event => updateNote(event.target.value)}
        style={{flexGrow: 1}}
      />
    </WidgetBody>
  );
};

const NoteWidget = ({note: {content}, allHide, noteActiveOnOpen, noteHide, updateNote}) => {
  return (
    <SlidingWidget
      yPosition="bottom"
      xPosition="right"
      xOffset={10}
      heightWhenActive='350px'
      width='450px'
      activeOnOpen={noteActiveOnOpen}
      showArrowOnIconHover={true}
      widgetIcon={<IconButton
        iconIsVisible={!allHide && !noteHide}
        faClass="fa-pencil-square-o"
        onHoverText="Note Taker"
      />}
      widgetHeader={<WidgetHeader header="Note Taker"/>}
      widgetBody={<NoteBody
        content={content}
        updateNote={updateNote}
      />}
    />
  );
};

function mapStateToProps(
  {
    note,
    options:
      {
        allHide,
        noteActiveOnOpen,
        noteHide
      },
  }
) {
  return {
    note,
    allHide,
    noteActiveOnOpen,
    noteHide,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateNote: content => {
      dispatch(updateNoteContent(content));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteWidget);
