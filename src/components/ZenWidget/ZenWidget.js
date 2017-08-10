import React from 'react';

import Widget from '../common/Widget';
import Icon from '../common/Icon';

const ZenWidget = () => {

  return <Widget yPosition="top"
                 xPosition="left"
                  xOffset={10}
  >
   <Icon faClass="fa-heartbeat"/>
  </Widget>
};

export default ZenWidget;
