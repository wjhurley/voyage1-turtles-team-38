import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox} from '../../common/Inputs';

const TodoOptions = ({name, handleInputChange, openSectionName, options}) => {
  const {
    todosHideIcon,
    todosActiveOnOpen,
  } = options;

  return (
    <div
      style={{
        display: name === openSectionName
          ? 'block'
          : 'none',
      }}
    >
      <Checkbox
        name="todosHideIcon"
        checked={todosHideIcon}
        onChange={handleInputChange}
        labelText="Hide Todo List Icon"
      />
      <br/>
      <Checkbox
        name="todosActiveOnOpen"
        checked={todosActiveOnOpen}
        onChange={handleInputChange}
        labelText="Active on open"
      />
    </div>
  );
};

TodoOptions.propTypes = {
  openSectionName: PropTypes.string.isRequired,
  name: PropTypes.string,
  options: PropTypes.object,
};

TodoOptions.defaultProps = {
  name: 'todos',
};

export default TodoOptions;
