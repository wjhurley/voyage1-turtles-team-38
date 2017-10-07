import React from 'react';
import PropTypes from 'prop-types';

import './SlidingWidgetBody.css';

const WidgetBody = ({backgroundColor, children}) => {
  return (
      <div style={{backgroundColor}} className="WidgetBody">{children}</div>
  );
};

WidgetBody.propTypes = {
  backgroundColor: PropTypes.string
};

WidgetBody.defaultProps = {
  backgroundColor: 'rgba(0,0,0,0.25)'
};

export default WidgetBody;
