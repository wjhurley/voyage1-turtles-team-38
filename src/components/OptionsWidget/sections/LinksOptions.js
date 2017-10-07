import React from 'react';
import PropTypes from 'prop-types';

import {Checkbox, TextArea} from '../../common/Inputs';
import Separator from '../../common/Separator';

const LinksOptions = ({name, handleInputChange, openSectionName, linksString, options, handleLinksChange}) => {

  const {
    linksHideIcon,
    linksActiveOnOpen,
    topVisitedHideIcon,
    topVisitedActiveOnOpen,
  } = options;

  return (
    <div
      style={{
        display: name === openSectionName ? 'block' : 'none',
      }}
    >
        <TextArea
          name="linksString"
          value={linksString}
          onChange={handleLinksChange}
          spellcheck={false}
        />
      <br/>
      <Checkbox
        name="linksHideIcon"
        checked={linksHideIcon}
        labelText="Hide Quick Links Icon"
        onChange={handleInputChange}
      />
      <br/>
      <Checkbox
        name="linksActiveOnOpen"
        checked={linksActiveOnOpen}
        labelText="Active on open"
        onChange={handleInputChange}
      />
      <Separator header="Top Visited"/>
      <Checkbox
        name="topVisitedHideIcon"
        checked={topVisitedHideIcon}
        labelText="Hide Top Visited Icon"
        onChange={handleInputChange}
      />
      <br/>
      <Checkbox
        name="topVisitedActiveOnOpen"
        checked={topVisitedActiveOnOpen}
        labelText="Active on open"
        onChange={handleInputChange}
      />
    </div>
  );
};

LinksOptions.propTypes = {
  openSectionName: PropTypes.string.isRequired,
  name: PropTypes.string,
  options: PropTypes.object.isRequired,
  linksString: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

LinksOptions.defaultProps = {
  name: 'links',
};

export default LinksOptions;
