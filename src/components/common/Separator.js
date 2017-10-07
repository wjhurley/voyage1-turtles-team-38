
import React from 'react';
import PropTypes from 'prop-types';

import './Separator.css';

const Separator = ({header}) => {
  return (
    <div className="Separator">
      {header}
    </div>
  );
};

Separator.propTypes = {
  header : PropTypes.string
};

export default Separator;
