import React, {Component} from 'react';
import {connect} from 'react-redux';

import './TodoWidget.css';

import {addTodo, deleteTodo, countTodos} from '../../actions/todoActions';

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
    const {submitNewTodo, countTodos} = this.props;

    if (event.key === 'Enter' && newTask) {
      submitNewTodo(newTask);
      countTodos();

      this.setState({newTask: ''});
    }
  }

  handleTaskComplete(task) {
    const {deleteTodo, countTodos} = this.props;

    deleteTodo(task);
    countTodos();
  }

  render() {
    const {newTask} = this.state;
    const {todoCount, tasks, allHide, todosHideIcon, todosActiveOnOpen} = this.props;

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
          iconSpan={todoCount ? todoCount : null}
        />}
        widgetHeader={<WidgetHeader header="Todo List"/>}
        widgetBody={<WidgetBody extraClass="TaskList">
          {tasks.map((task, i) => {
            return (
              <IconButton
                iconIsVisible={!task.completed}
                faClass="fa-check"
                extraClass="Task"
                onClick={this.handleTaskComplete.bind(null, i)}
                key={i}
              >
                <label>{task.task}</label>
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
    todos:
      {
        todoCount,
        tasks
      },
    options:
      {
        allHide,
        todosHideIcon,
        todosActiveOnOpen,
      },
  }) {
  return {
    todoCount,
    tasks,
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
    deleteTodo: (index) => {
      dispatch(deleteTodo(index));
    },
    countTodos: () => {
      dispatch(countTodos());
    },
    // clearTodo: () => {
    //   dispatch(clearTodo());
    // },
    // completeTodo: (index) => {
    //   dispatch(completeTodo(index));
    // },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoWidget);
