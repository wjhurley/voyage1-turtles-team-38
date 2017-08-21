import React from 'react';
import {connect} from 'react-redux'

import {
  toggleIconVisibility as toggleWeatherIconVisibility
} from "../../actions/weatherActions";

import Widget from '../common/Widget';
import Icon from '../common/Icon';

const OptionsWidget = ({onIconClick}) => {

  // options functionality needs to be built
  // this is currently just demoing inter-widget interaction

   return (
     <Widget yPosition="bottom"
                    xPosition="left">
      <Icon faClass="fa-cog"
            onIconClick={onIconClick}
            onHoverText="Options - right now just provides demo of inter-widget interactions"
      />
    </Widget>
   );
};

function mapDispatchToProps(dispatch) {
  return {
    onIconClick: () => {
      dispatch(toggleWeatherIconVisibility());
    }
  }
}

export default connect(null, mapDispatchToProps)(OptionsWidget);
