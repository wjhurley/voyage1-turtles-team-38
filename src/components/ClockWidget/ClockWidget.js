import React, {Component} from 'react';
import {connect} from 'react-redux';
import './ClockWidget.css';
import moment from 'moment';

class ClockWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(),
      timeFormat: this.props.clockType === '12' ? 'hh:mm' : 'HH:mm',
    };
  }

  componentDidMount() {
    //update every second but will only display minutes
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: moment(),
    });
  }

  injectClockStyle() {
    return {
      fontWeight: this.props.clockBold ? 'bold' : 'normal',
      opacity: this.props.clockTransparency / 100,
    };
  }

  renderDate() {
    if (this.props.clockDate === 'show') {
      return <div className="date">
        {this.state.date.format('dddd, MMMM, Do YYYY')}
      </div>;
    }
    return null;
  }

  renderA() {
    if (this.props.clockAmPm === 'show') {
      return <span className="ampm">
        {this.state.date.format('A')}
      </span>;
    }
    return null;
  }

  render() {
    return this.props.clockHide ? null : (
      <div className="Clock" style={this.injectClockStyle()}>
        <div>
          <span className="time">
            {this.state.date.format(this.state.timeFormat)}
          </span>
          {this.renderA()}
        </div>
        {this.renderDate()}
      </div>
    );
  }
}

function mapStateToProps(
  {
    options:
      {
        clockType,
        clockAmPm,
        clockDate,
        clockHide,
        clockTransparency,
        clockBold,
      },
  }) {
  return {
    clockType,
    clockAmPm,
    clockDate,
    clockHide,
    clockTransparency,
    clockBold,
  };
}

export default connect(mapStateToProps)(ClockWidget);
