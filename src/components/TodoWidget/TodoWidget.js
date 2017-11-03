import React, {Component} from 'react';
import {connect} from 'react-redux';

import './TodoWidget.css';

import {addTodo, completeTodo, deleteTodo, clearTodo} from '../../actions/todoActions';

import SlidingWidget from '../common/SlidingWidget';
import WidgetHeader from '../common/SlidingWidgetHeader';
import WidgetBody from '../common/SlidingWidgetBody';
import IconButton from '../common/IconButton';
import Text from '../common/Inputs/Text';

class TodoWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ''
    };
    this.handleNewTask = this.handleNewTask.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleTaskComplete = this.handleTaskComplete.bind(this);
  }

  handleNewTask(event) {
    this.setState({newTask: event.target.value});
  }

  handleKeyPress(event) {
    const {newTask} = this.state;
    const {submitNewTodo} = this.props;

    if (event.key === 'Enter' && newTask) {
      submitNewTodo(newTask);

      this.setState({newTask: ''});
    }
  }

  handleTaskComplete(task) {
    const {completeTodo} = this.props;
    
    completeTodo(task);
  }

  render() {
    const {newTask} = this.state;
    const {todos, allHide, todosHideIcon, todosActiveOnOpen} = this.props;
    return(
      <SlidingWidget
        yPosition="bottom"
        xPosition="right"
        maxHeightWhenActive="350px"
        width="290px"
        activeOnOpen={todosActiveOnOpen}
        showArrowOnIconHover={true}
        widgetIcon={<IconButton
          iconIsVisible={!allHide && !todosHideIcon}
          faClass="fa-th-list"
          onHoverText="Todo List"
        />}
        widgetHeader={<WidgetHeader header="Todo List"/>}
        widgetBody={<WidgetBody extraClass="TaskList">
          {todos.map((todo, i) => {
            return (
              <IconButton
                iconIsVisible={!todo.completed}
                faClass="fa-check"
                extraClass="Task"
                onClick={this.handleTaskComplete.bind(null, i)}
                key={i}
              >
                <label>{todo.task}</label>
              </IconButton>
            );
          })}
          <Text
            name="newTodo"
            value={newTask}
            onChange={this.handleNewTask}
            onKeyPress={this.handleKeyPress}
            placeholder="What needs to be done?"
          />
        </WidgetBody>}
      />
    );
  }
}

function mapStateToProps(
  {
    todos,
    options:
      {
        allHide,
        todosHideIcon,
        todosActiveOnOpen,
      },
  }) {
  return {
    todos,
    allHide,
    todosHideIcon,
    todosActiveOnOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitNewTodo: (task) => {
      dispatch(addTodo(task));
    },
    completeTodo: (index) => {
      dispatch(completeTodo(index));
    },
    deleteTodo: (index) => {
      dispatch(deleteTodo(index));
    },
    clearTodo: () => {
      dispatch(clearTodo());
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoWidget);
