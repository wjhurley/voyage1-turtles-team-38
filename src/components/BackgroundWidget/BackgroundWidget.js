import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as backgroundActions from '../../actions/backgroundActions';

import './BackgroundWidget.css';

class BackgroundWidget extends Component {

  componentDidMount() {
    const {
      backgroundSource
      , background
    } = this.props;
    const {imageData} = background;

    // Only fetch if background source is random image
    // and there is no data already (i.e. after initial fetch)
    if (backgroundSource === 'randomImage' && !imageData) {
      this.props.actions.fetchImage();
    }
  }

  render() {
    const {
      backgroundSource,
      background,
    } = this.props;
    const {imageData, errorMessage} = background;

    const createBackgroundStyle = () => {
      if (imageData) {
        return {backgroundImage: `url(${imageData.imageUrl})`};
      }
      // TODO:
      // * [ ] - gracefully handle error (in action) OR switch to public api?
      // * [ ] - add random color function in reducer
      // in case of error just show color for now
      if (errorMessage || backgroundSource === 'randomColor') {
        return {backgroundColor: 'rgb(18, 162, 148)'};
      }
    };

    return (
      <div>
        <div
          className="BackgroundWidget"
          style={createBackgroundStyle()}
        />
        {imageData && imageData.userName ? <p className="unsplash">
          Photo by <a target="_blank"
                      rel="noopener noreferrer"
                      href={imageData.userProfile}>{imageData.userName}</a> / <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com?utm_source=leoh_clone&utm_medium=referral&utm_campaign=api-credit">Unsplash</a>
        </p> : null}
      </div>
    );
  }
}

function mapStateToProps(
  {
    background,
    options: {
      backgroundSource
    }
  }) {
  return {backgroundSource, background};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(backgroundActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BackgroundWidget);
