import React from 'react';
import PropTypes from 'prop-types';

import parseDomain from 'parse-domain';

import './MenuLinkFavicon.css';

const MenuLinkFavicon = ({url}) => {

  // if no not valid, use none, google will return globe
  const domainParts = parseDomain(url);
  const domain = domainParts ? `${domainParts.domain}.${domainParts.tld}` : "na";
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}`;
  return (
    <img
      className="MenuLinkFavicon"
      src={faviconUrl}
      alt={domain}
    />
  );
};

MenuLinkFavicon.propsTypes = {
  url: PropTypes.string.isRequired,
};

export default MenuLinkFavicon;
