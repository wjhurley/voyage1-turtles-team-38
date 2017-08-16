import React, { Component } from 'react';
import './ClockWidget.css';

class ClockWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      options: {
        hour: 'numeric', minute: 'numeric', hour12: false
      }
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="Clock">
        {this.state.date.toLocaleTimeString('en-US',this.state.options)}
      </div>
    )
  }
}

export default ClockWidget;
