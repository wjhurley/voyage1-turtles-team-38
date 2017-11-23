import React from 'react';
import PropTypes from 'prop-types';
import {Checkbox, TextArea} from '../../common/Inputs';

const TodoOptions = ({name, handleInputChange, openSectionName, todosString, options, handleTodosChange}) => {
  const {
    todosHideIcon,
    todosActiveOnOpen,
  } = options;

  return (
    <div
      style={{
        display: name === openSectionName ? 'block' : 'none',
      }}
    >
      <TextArea
        name="todosString"
        value={todosString}
        onChange={handleTodosChange}
        spellcheck={false}
      />
      <br/>
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
  todosString: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

TodoOptions.defaultProps = {
  name: 'todos',
};

export default TodoOptions;
