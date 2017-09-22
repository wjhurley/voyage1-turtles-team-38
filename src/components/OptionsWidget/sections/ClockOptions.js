import React from 'react';
import PropTypes from 'prop-types';

import {Radio, Checkbox, Number} from '../../common/Inputs';

const ClockOptions = ({name, handleInputChange, openSectionName, options}) => {
    const {
      clockType,
      clockAmPm,
      clockDate,
      clockHide,
      clockTransparency,
      clockBold,
    } = options;

    return (
      <div
        style={{
          display: name === openSectionName ? 'block' : 'none',
        }}>
        <label>Type: </label>
        <Radio
          name='clockType'
          value='12'
          selectedValue={clockType}
          onChange={handleInputChange}
          labelText='12 Hour'
        />
        <Radio
          name='clockType'
          value='24'
          selectedValue={clockType}
          onChange={handleInputChange}
          labelText='24 hour'
        />
        <br/>
        <label>AM/PM: </label>
        <Radio
          name='clockAmPm'
          value='show'
          selectedValue={clockAmPm}
          onChange={handleInputChange}
          labelText='Show'
        />
        <Radio
          name='clockAmPm'
          value='hide'
          selectedValue={clockAmPm}
          onChange={handleInputChange}
          labelText='Hide'
        />
        <br/>
        <label>Date: </label>
        <Radio
          name='clockDate'
          value='show'
          selectedValue={clockDate}
          onChange={handleInputChange}
          labelText='Show'
        />
        <Radio
          name='clockDate'
          value='hide'
          selectedValue={clockDate}
          onChange={handleInputChange}
          labelText='Hide'
        />
        <br/>
        <Checkbox
          name="clockHide"
          checked={clockHide}
          labelText='Hide clock'
          onChange={handleInputChange}
        />
        <br/>
        <Number
          name="clockTransparency"
          value={clockTransparency}
          onChange={handleInputChange}
          labelText="Transparency: "
        />
        <br/>
        <Checkbox
          name="clockBold"
          checked={clockBold}
          labelText='Bold'
          onChange={handleInputChange}
        />
      </div>
    );
};

ClockOptions.propTypes = {
  openSectionName: PropTypes.string.isRequired,
  name: PropTypes.string,
  options: PropTypes.object,
  handleInputChange: PropTypes.func.isRequired,
};

ClockOptions.defaultProps = {
  name: 'clock',
};

export default ClockOptions;
