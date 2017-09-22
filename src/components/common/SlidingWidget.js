import React, {Component} from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import uuidv4 from 'uuid/v4';

import Button from './Button';
import HoverArrow from './HoverArrow';
import './SlidingWidget.css';

/* The SlidingWidget takes as props an icon (widgetIcon), body (widgetBody) & header (widgetHeader) as react elements.
  The body & header are rendered in a SlidingPanel higher-order component which is either active or inactive based on one of the following three interactions:
    -- if activeOnOpen, then it's active on rendering of SlidingWidget
    -- active state is toggled via clicking icon
    -- if active, it becomes inactive on click outside
  Toggling between active and inactive triggers css transition animation based on element height
 */

class SlidingPanel extends Component {

  //required for onClickOutside
  handleClickOutside = e => {
    this.props.handleOnClickOutsidePanel();
  };

  constructor(props) {
    super(props);
    this.state = {
      // initialHeight in state at construction only
      // afterwards height animation will be handled by procedural code (see processAnimation below)
      initialHeight: this.props.isActive ? this.props.heightWhenActive : '0px',
      isActiveRequests: [],
      animationPending: false,
    };
    this.processAnimation = this.processAnimation.bind(this);
    this.animateSlideActive = this.animateSlideActive.bind(this);
    this.animateSlideInactive = this.animateSlideInactive.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {isActive} = this.props;
    // want to concat each request to an array
    // and perform animation requests in sequentially until all complete
    if (prevProps.isActive !== isActive) {
      this.setState(prevState => {
        return {
          isActiveRequests: prevState.isActiveRequests.concat(
            this.props.isActive),
        };
        //callback to begin toggle animation but only if not already in process (due to previous request)
      }, () => {if (!this.state.animationPending) this.processAnimation();});
    }
  }

  processAnimation() {
    let nextIsActiveRequest = null;
    this.setState(prevState => {
      if (prevState.isActiveRequests.length > 0) {
        let newIsActiveRequests = prevState.isActiveRequests;
        nextIsActiveRequest = newIsActiveRequests.splice(0, 1)[0];
        return {
          isActiveRequests: newIsActiveRequests,
          animationPending: true,
        };
      } else {
        return {animationPending: false};
      }
      //callback to animate so long as there is a next request
    }, () => {
      if (nextIsActiveRequest !== null) {
        nextIsActiveRequest ? this.animateSlideActive(this.processAnimation) : this.animateSlideInactive(this.processAnimation);
      }
    });
  }

  // because there is no simple way to create transitioning height animations
  // when determined by children height of unknown size e.g. height 'auto' some procedural code is required
  // this is modified from the solution provided here: https://css-tricks.com/using-css-transitions-auto-dimensions/

  animateSlideActive(callback) {
    const {heightWhenActive} = this.props;
    this.slider.addEventListener('transitionend', completeAnimateActive);

    if (heightWhenActive === 'auto') {
      // for auto, get height of element's inner content
      // and set height to that so transition animation is performed
      const sliderHeight = this.slider.scrollHeight;
      this.slider.style.height = `${sliderHeight}px`;
    } else {
      this.slider.style.height = heightWhenActive;
    }

    function completeAnimateActive(event) {
      if (heightWhenActive === 'auto') {
        // set height back to auto to ensure child content can be added or removed as expected
        event.target.style.height = null;
      }
      event.target.removeEventListener('transitionend', completeAnimateActive);
      callback();
    }
  }

  animateSlideInactive(callback) {
    const {heightWhenActive} = this.props;
    this.slider.addEventListener('transitionend', completeAnimateInactive);

    if (heightWhenActive === 'auto') {
      // for auto, get height of element's inner content
      const sliderHeight = this.slider.scrollHeight;
      // on next frame, explicitly set height to pixel height so aren't transition out of auto and therefore transition will be animated
      requestAnimationFrame(() => {
        this.slider.style.height = `${sliderHeight}px`;
        // on next frame transition to height: 0
        requestAnimationFrame(() => {
          this.slider.style.height = '0px';
          this.slider.addEventListener('transitionend',
            completeAnimateInactive);
        });
      });
    } else {
      this.slider.style.height = '0px';
    }
      function completeAnimateInactive(event) {
        event.target.removeEventListener('transitionend',
          completeAnimateInactive);
        callback();
      }
    }

    render() {
      const {maxHeightWhenActive, width, children} = this.props;

        return (
          //need to reference div to transition height animation as desired (see functions)
          <div className="SlidingPanel"
               style={{
                 width,
                 height: this.state.initialHeight,
                 maxHeight: maxHeightWhenActive,
               }}
               ref={(div) => {this.slider = div; }}>
            {children}
          </div>
        );
      }
  }

  /* By wrapping the component we get an enhanced higher-order component with the following props available - disableOnClickOutside & outsideClickIgnoreClass
    --disableOnClickOutside - if inactive we don't want unnecessary global event listeners
    --outsideClickIgnoreClass - used to ignore event if clicking on related icon as icon toggle handles change
  */

  const EnhancedSlidingPanel = onClickOutside(SlidingPanel);

  class SlidingWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.activeOnOpen,
      arrowIsHidden: true,
      //for clickOutsideIgnoreClass
      iconButtonId: uuidv4(),
    };
    this.handleOnClickOutsidePanel = this.handleOnClickOutsidePanel.bind(this);
    this.handleOnIconClick = this.handleOnIconClick.bind(this);
    this.handleOnIconMouseEnter = this.handleOnIconMouseEnter.bind(this);
    this.handleOnIconMouseLeave = this.handleOnIconMouseLeave.bind(this);

  }

  handleOnClickOutsidePanel() {
    this.setState({isActive: false});
  }

  handleOnIconClick() {
    this.setState(prevState => {
      return {isActive: !prevState.isActive};
    });
  }

  handleOnIconMouseEnter() {
    this.setState({
      arrowIsHidden: false,
    });
  }

  handleOnIconMouseLeave() {
    this.setState({
      arrowIsHidden: true,
    });
  }

  renderArrowOnIconHover() {
    const {arrowIsHidden} = this.state;
    const {showArrowOnIconHover, yPosition} = this.props;

    if (showArrowOnIconHover) {
      return <HoverArrow hidden={arrowIsHidden}
                         direction={yPosition === 'top' ? 'down' : 'up'}/>;
    }
    return null;
  }

  render() {

    const {isActive, iconButtonId} = this.state;
    const {
      width,
      heightWhenActive,
      maxHeightWhenActive,
      yPosition,
      xPosition,
      yOffset,
      xOffset,
      widgetIcon,
      widgetHeader,
      widgetBody,
    } = this.props;

    // render in reverse order widget placed on top or bottom
    const flexDirection = yPosition === 'top' ? 'column' : 'column-reverse';

    const widgetStyle = {
      top: yPosition === 'top' ? `${yOffset}em` : undefined,
      bottom: yPosition === 'bottom' ? `${yOffset}em` : undefined,
      left: xPosition === 'left' ? `${xOffset}em` : undefined,
      right: xPosition === 'right' ? `${xOffset}em` : undefined,
      alignItems: xPosition === 'left' ? 'flex-start' : 'flex-end',
      flexDirection,
    };

    // use name of icon to ignore button class for onClickOutside handler
    // button will continue to toggle as previous

    return (
      <div className="SlidingWidget" style={widgetStyle}>
        <div
          onMouseEnter={this.handleOnIconMouseEnter}
          onMouseLeave={this.handleOnIconMouseLeave}
        >
          <Button
            onClick={this.handleOnIconClick}
            extraClassNames={iconButtonId}
            display="flex"
            style={{flexDirection}}
          >
            {widgetIcon}
            {this.renderArrowOnIconHover()}
          </Button>
        </div>
        <EnhancedSlidingPanel
          handleOnClickOutsidePanel={this.handleOnClickOutsidePanel}
          isActive={isActive}
          maxHeightWhenActive={maxHeightWhenActive}
          heightWhenActive={heightWhenActive}
          width={width}
          disableOnClickOutside={!isActive}
          outsideClickIgnoreClass={iconButtonId}
        >
          {widgetHeader ? widgetHeader : null}
          {widgetBody}
        </EnhancedSlidingPanel>
      </div>
    );
  }
}

SlidingWidget.propTypes = {
  width: PropTypes.string,
  //if neither set heightWhenActive or maxHeightWhen active is set assume auto
  heightWhenActive: PropTypes.string, //don't need for auto, need for max/fixed
  maxHeightWhenActive: PropTypes.string, //don't need for auto, need for max/fixed
  yPosition: PropTypes.oneOf(['top', 'bottom']).isRequired,
  xPosition: PropTypes.oneOf(['left', 'right']).isRequired,
  yOffset: PropTypes.number, // absolute offset in em units from top or bottom
  xOffset: PropTypes.number, // absolute offset in em units from left or right
  widgetIcon: PropTypes.element.isRequired,
  widgetBody: PropTypes.element.isRequired,
  widgetHeader: PropTypes.element,
  activeOnOpen: PropTypes.oneOf(['', true, false]), // because of how form state is processed, may be empty string
  showArrowOnIconHover: PropTypes.bool,
};

SlidingWidget.defaultProps = {
  yOffset: 2,
  xOffset: 2,
  width: 'auto',
  heightWhenActive: 'auto',
  maxHeightWhenActive: 'none',
  arrowOnHover: false,
};

export default SlidingWidget;
