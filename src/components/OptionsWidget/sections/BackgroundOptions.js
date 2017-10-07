import React from 'react';
import PropTypes from 'prop-types';

import {Radio} from '../../common/Inputs';

const BackgroundOptions = ({name, handleInputChange, openSectionName, options}) => {
    const {
      backgroundSource,
    } = options;

    return (
      <div
        style={{
          display: name === openSectionName ? 'block' : 'none',
        }}
      >
        <Radio
          name='backgroundSource'
          value='randomImage'
          selectedValue={backgroundSource}
          onChange={handleInputChange}
          labelText='Random image'
        />
        <br/>
        <Radio
          name='backgroundSource'
          value='randomColor'
          selectedValue={backgroundSource}
          onChange={handleInputChange}
          labelText='Random color'
        />
      </div>
    );
  };

BackgroundOptions.propTypes = {
  openSectionName: PropTypes.string.isRequired,
  name: PropTypes.string,
  options: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

BackgroundOptions.defaultProps = {
  name: 'background'
};

export default BackgroundOptions;
