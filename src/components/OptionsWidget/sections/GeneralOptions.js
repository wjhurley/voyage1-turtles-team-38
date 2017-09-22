import React from 'react';
import PropTypes from 'prop-types';

import {Radio, Checkbox, Select, Text} from '../../common/Inputs';
import Separator from '../../common/Separator';

const GeneralOptions = ({name, handleInputChange, openSectionName, options}) => {

  const {
    theme,
    quotes,
    allHide,
    newsHide,
    newsActiveOnOpen,
    newsSource,
    newsSourceRssUrl,
    noteHide,
    noteActiveOnOpen,
    searchHide,
    searchActiveOnOpen,
  } = options;

  return (
    <div
      style={{
        display: name === openSectionName ? 'block' : 'none',
      }}>
      <Select
        name='theme'
        value={theme}
        options={[
          {labelText: 'Select Theme', value: 'default'},
          {labelText: 'Default - Dark', value: 'defaultDark'},
          {labelText: 'Default - Dark + Blue', value: 'defaultDarkBlue'},
          {labelText: 'Default - Dark + Red', value: 'defaultDarkRed'},
          {labelText: 'Default - Light', value: 'defaultLight'},
          {labelText: 'Flat White - Blue', value: 'flatWhiteBlue'},
          {labelText: 'Flat White - Red', value: 'flatWhiteRed'},
          {labelText: 'Flat Dark', value: 'flatDark'},
        ]}
        labelText="Theme: "
        onChange={handleInputChange}
      />
      <br/>
      <label>Quotes: </label>
      <Radio
        name='quotes'
        value='show'
        selectedValue={quotes}
        onChange={handleInputChange}
        labelText='Show'
      />

      <Radio
        name='quotes'
        value='hide'
        selectedValue={quotes}
        onChange={handleInputChange}
        labelText='Hide'
      />
      <br/>
      <Separator header={'Tool Actions'}/>
      <label>All </label>
      <Checkbox
        name="allHide"
        checked={allHide}
        labelText='Hide'
        onChange={handleInputChange}
      />
      <br/>
      <label>News </label>
      <Checkbox
        name="newsHide"
        checked={newsHide}
        labelText='Hide'
        onChange={handleInputChange}
      />
      <Checkbox
        name="newsActiveOnOpen"
        checked={newsActiveOnOpen}
        labelText='Active on open'
        onChange={handleInputChange}
      />
      <br/>
      <label>RSS </label>
      <Radio
        name='newsSource'
        value='default'
        selectedValue={newsSource}
        onChange={handleInputChange}
        labelText='Default News'
      />

      <Radio
        name='newsSource'
        value='rss'
        selectedValue={newsSource}
        onChange={handleInputChange}
        labelText='RSS'
      />
      <Text
        name="newsSourceUrl"
        value={newsSourceRssUrl}
        onChange={handleInputChange}
        disabled={newsSource !== 'rss'}
      />
      <br/>
      <label>Notepad </label>
      <Checkbox
        name='noteHide'
        checked={noteHide}
        labelText='Hide'
        onChange={handleInputChange}
      />
      <Checkbox
        name='noteActiveOnOpen'
        checked={noteActiveOnOpen}
        labelText='Active on open'
        onChange={handleInputChange}
      />
      <br/>
      <label>Search </label>
      <Checkbox
        name='searchHide'
        checked={searchHide}
        labelText='Hide'
        onChange={handleInputChange}
      />
      <Checkbox
        name='searchActiveOnOpen'
        checked={searchActiveOnOpen}
        labelText='Active on open'
        onChange={handleInputChange}
      />
    </div>
  );
};

GeneralOptions.propTypes = {
  openSectionName: PropTypes.string.isRequired,
  name: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  options: PropTypes.object,
};

GeneralOptions.defaultProps = {
  name: 'general',
};

export default GeneralOptions;
