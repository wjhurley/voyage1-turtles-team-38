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
    //update every second but will only display minutes
    this.timerID = setInterval(
      () => this.tick(),
      1000
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
        {/*2nd div to enable vertical/horizontal centering*/}
        <div>{this.state.date.toLocaleTimeString('en-US',this.state.options)}</div>
      </div>
    )
  }
}

export default ClockWidget;
