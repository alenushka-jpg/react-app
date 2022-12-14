/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './Navigation.css';
import {HandySvg} from 'handy-svg';
import iconHome from '../../icon/icon-home.svg';
import iconNews from '../../icon/icon-news.svg';
import iconMessages from '../../icon/icon-messages.svg';
import iconCommunities from '../../icon/icon-communities.svg';
import iconBell from '../../icon/icon-bell.svg';
import iconSetting from '../../icon/icon-setting.svg';
import iconLogout from '../../icon/icon-logout.svg';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li>
          <NavLink className={(navData) => navData.isActive ? 'navigation__link active' : 'navigation__link'} to='/profile'>
            <HandySvg src={iconHome} width="20" height="20" />
            My profile
          </NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? 'navigation__link active' : 'navigation__link'} to='/newsfeed'>
            <HandySvg src={iconNews} width="20" height="20" />
            News
          </NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? 'navigation__link active' : 'navigation__link'} to='/messages'>
            <HandySvg src={iconMessages} width="20" height="20" />
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? 'navigation__link active' : 'navigation__link'} to='/communities'>
            <HandySvg src={iconCommunities} width="20" height="20" />
            Communities
          </NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? 'navigation__link active' : 'navigation__link'} to='/notification'>
            <HandySvg src={iconBell} width="20" height="20" />
            Notification
          </NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? 'navigation__link active' : 'navigation__link'} to='/settings'>
            <HandySvg src={iconSetting} width="20" height="20" />
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? 'navigation__link active' : 'navigation__link'} to='/logout'>
            <HandySvg src={iconLogout} width="20" height="20" />
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;