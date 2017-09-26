import React from 'react';
import PropTypes from 'prop-types';

import './Widget.css';

const Widget = ({yPosition, xPosition, yOffset, xOffset, children}) => {

  const styles = {
    top: yPosition === 'top' ? `${yOffset}em` : undefined,
    bottom: yPosition === 'bottom' ? `${yOffset}em` : undefined,
    left: xPosition === 'left' ? `${xOffset}em` : undefined,
    right: xPosition === 'right' ? `${xOffset}em` : undefined,
    alignItems: xPosition === 'left' ? 'flex-start' : 'flex-end'
  };

  return (
    <div className="Widget" style={styles}>
      {children}
    </div>
  );
};

Widget.propTypes = {
  yPosition: PropTypes.oneOf(['top', 'bottom']).isRequired,
  xPosition: PropTypes.oneOf(['left', 'right']).isRequired,
  yOffset: PropTypes.number, // absolute offset in em units from top or bottom
  xOffset: PropTypes.number // absolute offset in em units from left or right
};

Widget.defaultProps = {
  yOffset: 2,
  xOffset: 2
};

export default Widget;
