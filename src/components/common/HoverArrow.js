import React from 'react';
import PropTypes from 'prop-types';

import './HoverArrow.css';

const HoverArrow = ({direction, hidden}) => {
  return (
    <div className="HoverArrow"
         style={{visibility: hidden ? "hidden": "visible" }}>
      <i className={`fa fa-angle-${direction}`}/>
    </div>
  );
};

HoverArrow.propTypes = {
  hidden: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(["up","down"])
};

export default HoverArrow;
