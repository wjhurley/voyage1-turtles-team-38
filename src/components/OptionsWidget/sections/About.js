import React from 'react';
import PropTypes from 'prop-types';

const About = ({name, openSectionName}) => {
  return (
    <div
      style={{
        display: name === openSectionName ? 'block' : 'none',
      }}
    >
      <p>
        A Build-to-Learn Project, we Cloned the Leoh Chrome Extension
        using React</p>
    </div>
  );
};

About.propTypes = {
  name: PropTypes.string,
  openSectionName: PropTypes.string.isRequired,
};

export default About;
