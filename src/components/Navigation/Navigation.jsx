/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './Navigation.css';
import {HandySvg} from 'handy-svg';
import iconHome from '../../icon/icon-home.svg';
import iconNews from '../../icon/icon-news.svg';
import iconMessages from '../../icon/icon-messages.svg';
import iconFriend from '../../icon/icon-friend.svg';
import iconCommunities from '../../icon/icon-communities.svg';
import iconPhotos from '../../icon/icon-photos.svg';
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
          <NavLink className={(navData) => navData.isActive ? 'navigation__link active' : 'navigation__link'} to='/news'>
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
          <NavLink className={(navData) => navData.isActive ? 'navigation__link active' : 'navigation__link'} to='/friends'>
            <HandySvg src={iconFriend} width="15" height="15" />
            Friends
          </NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? 'navigation__link active' : 'navigation__link'} to='/communities'>
            <HandySvg src={iconCommunities} width="20" height="20" />
            Communities
          </NavLink>
        </li>
        <li>
          <NavLink className={(navData) => navData.isActive ? 'navigation__link active' : 'navigation__link'} to='/photos'>
            <HandySvg src={iconPhotos} width="20" height="20" />
            Photos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;