import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Icon from '../common/Icon';
import NoteIconArrow from './NoteIconArrow';

import './NoteIcon.css';

class NoteIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowIsHidden: true
    };
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
  }

  handleOnMouseEnter() {
    this.setState({
      arrowIsHidden: false
    });
  }

  handleOnMouseLeave() {
    this.setState({
      arrowIsHidden: true
    });
  }

  render() {
    const { onIconClick } = this.props;
    const { arrowIsHidden } = this.state;

    return (
      <div onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
        <Icon onHoverText="Note Taker" onIconClick={onIconClick} />
        <NoteIconArrow hidden={arrowIsHidden} />
      </div>
    );
  }
}

NoteIcon.propTypes = {
  onIconClick: PropTypes.func.isRequired
}

export default NoteIcon;
