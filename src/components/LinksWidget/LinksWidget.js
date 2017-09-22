import React, {Component} from 'react';
import {connect} from 'react-redux';

import './LinksWidget.css';

import {addLink} from '../../actions/linkActions';

import SlidingWidget from '../common/SlidingWidget';
import WidgetBody from '../common/SlidingWidgetBody';
import Button from '../common/Button';
import IconButton from '../common/IconButton';
import {Text} from '../common/Inputs';
import Icon from '../common/Icon';
import Menu from '../common/Menu';
import MenuLink from '../common/MenuLink';
import MenuLinkFavicon from '../common/MenuLinkFavicon';
import MenuItemIcon from '../common/MenuItemIcon';

const AddLinkButton = ({onClick}) => {
  return (
    <div className="AddLinkButton">
      <span/>
      <span>Quick Links</span>
      <Button
        onClick={onClick}
      >
        <Icon
          faClass="fa-plus-square"
          hoverText="Add new quick link"
        />
      </Button>
    </div>
  );
};

class LinksWidget extends Component {

  constructor(props) {
    super(props);
    this.state = {
      formIsActive: false,
      newLinkTitle: '',
      newLinkUrl: '',
    };
    this.toggleFormActive = this.toggleFormActive.bind(this);
    this.handleNewLinkTitleChange = this.handleNewLinkTitleChange.bind(this);
    this.handleNewLinkUrlChange = this.handleNewLinkUrlChange.bind(this);
    this.handleFormKeyPress = this.handleFormKeyPress.bind(this);
  }

  toggleFormActive() {
    this.setState(prevState => {
      return {formIsActive: !prevState.formIsActive};
    });
  }

  handleNewLinkTitleChange(event) {
    this.setState({newLinkTitle: event.target.value});
  }

  handleNewLinkUrlChange(event) {
    this.setState({newLinkUrl: event.target.value});
  }

  handleFormKeyPress(event) {
    const {newLinkTitle, newLinkUrl} = this.state;
    const {submitNewLink} = this.props;
    //need non-blank value for this one to do anything
    if (event.key === 'Enter' && newLinkTitle && newLinkUrl) {
      submitNewLink(newLinkTitle, newLinkUrl);
      // need to also update options links in string format
      // reset internal state
      this.setState({newLinkTitle: '', newLinkUrl: ''});
    }
  }

  render() {
    const {formIsActive, newLinkTitle, newLinkUrl} = this.state;
    const {links, allHide, linksHideIcon, linksActiveOnOpen} = this.props;
    return (
      <SlidingWidget
        yPosition="top"
        xPosition="left"
        maxHeightWhenActive="90vh"
        activeOnOpen={linksActiveOnOpen}
        widgetIcon={<IconButton
          iconIsVisible={!allHide && !linksHideIcon}
          faClass="fa-th"
          onHoverText="Quick Links"
        />}
        widgetBody={<WidgetBody
          backgroundColor='transparent'>
          {/*see LinksWidget.css for why transparent is required here*/}
          <Menu>
            {/*these will be disallowed unless running as a chrome-app - fine for now*/}
            <MenuLink url="chrome://apps">
              <MenuItemIcon faClass="fa-th-large"/>
              <div>Applications</div>
            </MenuLink>
            <MenuLink url="chrome://bookmarks">
              <MenuItemIcon faClass="fa-bookmark"/>
              <div>Bookmarks</div>
            </MenuLink>
            <MenuLink url="chrome://history">
              <MenuItemIcon faClass="fa-history"/>
              <div>History</div>
            </MenuLink>
            <hr style={{margin: 0}}/>
            <AddLinkButton onClick={this.toggleFormActive}/>
            {links.map((link, i) => {
              return (
                <MenuLink key={i} url={link.url}>
                  <MenuLinkFavicon url={link.url}/>
                  {link.title}
                </MenuLink>
              );
            })}
            <form
              className={formIsActive ? 'AddLinkForm isActive' : 'AddLinkForm'}>
              <Text
                name="newLinkTitle"
                value={newLinkTitle}
                onChange={this.handleNewLinkTitleChange}
                onKeyPress={this.handleFormKeyPress}
                placeholder="Title"
              />
              <Text
                name="newLinkUrl"
                value={newLinkUrl}
                onChange={this.handleNewLinkUrlChange}
                onKeyPress={this.handleFormKeyPress}
                placeholder="Website (http:// required)"
              />
            </form>
          </Menu>
        </WidgetBody>}
      />
    );
  }
}

function mapStateToProps(
  {
    links,
    options:
      {
        allHide,
        linksHideIcon,
        linksActiveOnOpen,
      },
  }) {
  return {
    links,
    allHide,
    linksHideIcon,
    linksActiveOnOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    submitNewLink: (title, url) => {
      dispatch(addLink(title, url));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinksWidget);

