/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import "./Navigation.css";
import NavigationItem from "./NavigationItem/NavigationItem";
// import { HandySvg } from "handy-svg";
// import { NavLink } from "react-router-dom";
// import iconHome from '../../icon/icon-home.svg';
// import iconNews from '../../icon/icon-news.svg';
// import iconMessages from '../../icon/icon-messages.svg';
// import iconCommunities from '../../icon/icon-communities.svg';
// import iconBell from '../../icon/icon-bell.svg';
// import iconSetting from '../../icon/icon-setting.svg';
// import iconLogout from '../../icon/icon-logout.svg';

const Navigation = (props) => {
  const navigationElements = props.navLinkTitles.map((n) => (
    <NavigationItem key={n.text} text={n.text} id={n.id} />
  ));

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationElements}
      </ul>
    </nav>
  );
};

export default Navigation;
