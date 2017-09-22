import React from 'react';
import PropTypes from 'prop-types';

import './SlidingWidgetHeader.css';

const WidgetHeader = ({header}) => {

  return (
    <h4 className="WidgetHeader">
      {header}
    </h4>
  );
};

WidgetHeader.propTypes = {
  header: PropTypes.string.isRequired,
};

export default WidgetHeader;
