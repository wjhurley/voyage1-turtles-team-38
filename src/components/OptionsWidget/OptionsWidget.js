import React, {Component} from 'react';
import {connect} from 'react-redux';
import onClickOutside from 'react-onclickoutside';

import {saveOptions} from '../../actions/optionsActions';
// links/todos are special case - not "options" reducer but can be saved via options form
import {saveLinksFromString} from '../../actions/linkActions';
import {getLinksAsString} from '../../reducers/links';
import {updateObject} from '../../utils/index';

import './OptionsWidget.css';

import Button from '../common/Button';
import IconButton from '../common/IconButton';
import Menu from '../common/Menu';
import MenuItem from '../common/MenuItem';
import MenuItemIcon from '../common/MenuItemIcon';

import {
  GeneralOptions,
  LinksOptions,
  TodoOptions,
  WeatherOptions,
  BackgroundOptions,
  ClockOptions,
  About,
} from './sections';

/*
TODO

* [ ] Add To-do List (with implementation of widget)
* [ ] Optional - Clock font and positioning (but why bother?)
* [ ] Zen
* [ ] Theme - implementation so changing theme changes styles - but how - maybe we can skip?
* [ ] Quotes? - requires api
*/

const OptionsMenu = ({openSectionOnClick}) => {
  return (
    <Menu>
      <MenuItem onClick={() => openSectionOnClick('general')}>
        <MenuItemIcon faClass='fa-cogs'/><div>General</div>
      </MenuItem>
      <MenuItem onClick={() => openSectionOnClick('links')}>
        <MenuItemIcon faClass='fa-link'/><div>Quick Links</div>
      </MenuItem>
      <MenuItem onClick={() => openSectionOnClick('todos')}>
        <MenuItemIcon faClass='fa-list-ul'/><div>Todo List</div>
      </MenuItem>
      <MenuItem onClick={() => openSectionOnClick('weather')}>
        <MenuItemIcon faClass='fa-cloud'/><div>Weather</div>
      </MenuItem>
      <MenuItem onClick={() => openSectionOnClick('zen')}>
        <MenuItemIcon faClass='fa-heartbeat'/><div>Zen Mode</div>
      </MenuItem>
      <MenuItem onClick={() => openSectionOnClick('clock')}>
        <MenuItemIcon faClass='fa-clock-o'/><div>Clock</div>
      </MenuItem>
      <MenuItem onClick={() => openSectionOnClick('background')}>
        <MenuItemIcon faClass='fa-picture-o'/><div>Background</div>
      </MenuItem>
      {/*break*/}
      <div style={{height: '20px', backgroundColor: 'rgba(0, 0, 0, 0.8)'}}/>
      <MenuItem onClick={() => openSectionOnClick('about')}>
        <MenuItemIcon faClass='fa-question-circle'/><div>About</div>
      </MenuItem>
    </Menu>
  );
};

class OptionsWindow extends Component {

  handleClickOutside = e => {
    this.props.handleOnClickOutsideWindow();
  };

  render() {
    const {isOpen, children} = this.props;
    return (
      <div className="OptionsWindow" style={{
        display: isOpen ? 'block' : 'none',
      }}>
        <div className="Header">Options & Settings</div>
        <div className="Body">
          {children}
        </div>
      </div>
    );
  }
}

const EnhancedOptionsWindow = onClickOutside(OptionsWindow);

class OptionsWidget extends Component {
  constructor(props) {
    super(props);
    this.updateOpenSection = this.updateOpenSection.bind(this);
    this.onIconClick = this.onIconClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnClickOutsidePanel = this.handleOnClickOutsidePanel.bind(this);
    this.handleOptionsInputChange = this.handleOptionsInputChange.bind(this);
    this.handleLinksChange = this.handleLinksChange.bind(this);

    // will store form state in Options Widget from redux on mounting
    // which will come from localStorage (or default if first use)
    // state will then be managed locally, any only dispatched to redux (and then localStorage)
    // if Save & Apply is done

    this.state = {
      openSectionName: 'general',
      windowIsOpen: false,
      initialOptions: this.props.options,
      initialLinksString: this.props.linksString,
      options: this.props.options,
      linksString: this.props.linksString,
    };
  }

  // update also linksString (TODO add todoString)
  // when receiving new props (due to redux change to links/todos within widget)

  componentWillReceiveProps(nextProps) {
    this.setState({
      initialLinksString: nextProps.linksString,
      linksString: nextProps.linksString,
    });
  }

  // this solution is ugly and could probably be more elegant with an additional function
  // but there are only two other reducers besides options updated here - links and todos so it is fine
  handleSubmit(event) {
    this.props.saveNewOptions(this.state.options);
    this.props.saveNewLinks(this.state.linksString);
    // no event.preventDefault() - want browser to refresh ---> will save to localStorage
  }

  updateOpenSection(name) {
    this.setState({openSectionName: name});
  }

  resetState() {
    this.setState({
      options: this.state.initialOptions,
      linksString: this.state.initialLinksString,
    });
  }


  onIconClick() {
    this.setState(prevState => {
        return {windowIsOpen: !prevState.windowIsOpen}
      },
      // if window closed reset state
      () => {if(!this.state.windowIsOpen) {this.resetState() }}
    );
  }

  handleOnClickOutsidePanel() {
    this.setState(
      {windowIsOpen: false}
      //execute resetState callback
      , this.resetState,
    );
  }

  handleOptionsInputChange(event) {
    const {name, value, type, checked} = event.target;
    // perform 2nd level merge
    this.setState(prevState => {
      return {
        options: updateObject(
          prevState.options,
          {[name]: type === 'checkbox' ? checked : value},
        ),
      };
    });
  }

  handleLinksChange(event) {
    this.setState({
      linksString: event.target.value,
    });
  }

  render() {
    const {
      windowIsOpen,
      openSectionName,
      options,
      linksString,
    } = this.state;

    // for preventing onclickoutside handler when clicking icon
    const OptionsIconButtonClassName = 'OptionsIconButton';

    return (
      <div>
        {/*unlike other widgets with opening window/panel on click
            options window is fixed in middle and has no sliding optiond
         */}
        <Button
          extraClassNames={OptionsIconButtonClassName}
          onClick={this.onIconClick}
          style={{
            position:'fixed',
            left: '2em',
            bottom: '2em',
          }}
        >

          <IconButton faClass="fa-cog"
                onHoverText="Options"
                iconIsVisible={true}
          />
        </Button>
        {/*fixed position so only icon will be affected by positioning*/}
        <EnhancedOptionsWindow
          isOpen={windowIsOpen}
          handleOnClickOutsideWindow={this.handleOnClickOutsidePanel}
          disableOnClickOutside={!windowIsOpen}
          outsideClickIgnoreClass={OptionsIconButtonClassName}
        >
          <OptionsMenu openSectionOnClick={this.updateOpenSection}/>
          <form
            className={'OptionsForm'}
            onSubmit={this.handleSubmit}
          >
            <div className='Body'>
              <GeneralOptions
                openSectionName={openSectionName}
                options={options}
                handleInputChange={this.handleOptionsInputChange}
              />
              <LinksOptions
                openSectionName={openSectionName}
                options={options}
                handleInputChange={this.handleOptionsInputChange}
                handleLinksChange={this.handleLinksChange}
                linksString={linksString}
              />
              <TodoOptions
                openSectionName={openSectionName}
                options={options}
                handleInputChange={this.handleOptionsInputChange}
              />
              <WeatherOptions
                openSectionName={openSectionName}
                options={options}
                handleInputChange={this.handleOptionsInputChange}
              />
              <BackgroundOptions
                openSectionName={openSectionName}
                options={options}
                handleInputChange={this.handleOptionsInputChange}
              />
              <ClockOptions
                openSectionName={openSectionName}
                options={options}
                handleInputChange={this.handleOptionsInputChange}
              />
              <About
                openSectionName={openSectionName}
              />
            </div>
            <div className='Footer'>
              <input type='submit' value='Save & Apply'/>
            </div>
          </form>
        </EnhancedOptionsWindow>
      </div>
    );
  }
}

function mapStateToProps({options, links}) {
  const linksString = getLinksAsString(links);
  return {options, linksString};
}

function mapDispatchToProps(dispatch) {
  return {
    saveNewLinks: savedLinksString => {
      dispatch(saveLinksFromString(savedLinksString));
    },
    saveNewOptions: savedOptions => {
      dispatch(saveOptions(savedOptions));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OptionsWidget);
