import React from 'react';
import PropTypes from 'prop-types';

import './SlidingWidgetBody.css';

const WidgetBody = ({backgroundColor, extraClass, children}) => {
  return (
      <div style={{backgroundColor}} className={`WidgetBody ${extraClass}`}>{children}</div>
  );
};

WidgetBody.propTypes = {
  backgroundColor: PropTypes.string,
  extraClass: PropTypes.string
};

WidgetBody.defaultProps = {
  backgroundColor: 'rgba(0,0,0,0.25)',
  extraClass: ""
};

export default WidgetBody;
