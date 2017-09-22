import React from 'react';
import PropTypes from 'prop-types';

import {Radio, Checkbox, Text} from '../../common/Inputs';

const WeatherOptions = ({name, handleInputChange, openSectionName, options}) => {

  const {
    weatherUnits,
    weatherLocation,
    weatherCustomLocationValue,
    weatherHideIcon,
    weatherActiveOnOpen,
  } = options;

  return (
    <div
      style={{
        display: name === openSectionName
          ? 'block'
          : 'none',
      }}
    >
      <label>Unit: </label>
      <Radio
        name='weatherUnits'
        value='F'
        selectedValue={weatherUnits}
        onChange={handleInputChange}
        labelText='&deg;F'
      />
      <Radio
        name='weatherUnits'
        value='C'
        selectedValue={weatherUnits}
        onChange={handleInputChange}
        labelText='&deg;C'
      />
      <br/>
      <Radio
        name='weatherLocation'
        value='geolocation'
        selectedValue={weatherLocation}
        onChange={handleInputChange}
        labelText='Use default geolocation'
      />
      <br/>
      <Radio
        name='weatherLocation'
        value='custom'
        selectedValue={weatherLocation}
        onChange={handleInputChange}
        labelText='Custom location: '
      />
      <Text
        name="weatherCustomLocationValue"
        value={weatherCustomLocationValue}
        onChange={handleInputChange}
        disabled={handleInputChange !== 'custom'}
      />
      <br/>
      <Checkbox
        name="weatherHideIcon"
        checked={weatherHideIcon}
        onChange={handleInputChange}
        labelText="Hide Weather Icon"
      />
      <br/>
      <Checkbox
        name="weatherActiveOnOpen"
        checked={weatherActiveOnOpen}
        onChange={handleInputChange}
        labelText="Active on open"
      />
    </div>
  );
};

WeatherOptions.propTypes = {
  openSectionName: PropTypes.string.isRequired,
  name: PropTypes.string,
  options: PropTypes.object,
  handleInputChange: PropTypes.func.isRequired,
};

WeatherOptions.defaultProps = {
  name: 'weather',
};

export default WeatherOptions;
