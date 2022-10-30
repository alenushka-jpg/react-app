/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './App.css';
import {HandySvg} from 'handy-svg';
import iconHome from './icon/icon-home.svg';
import iconNews from './icon/icon-news.svg';
import iconMessages from './icon/icon-messages.svg';
import iconFriend from './icon/icon-friend.svg';
import iconCommunities from './icon/icon-communities.svg';
import iconPhotos from './icon/icon-photos.svg';

const Navigation = () => {
  return (
    <div className="Navigation">
      <ul className="Navigation__list">
        <li>
          <a href='#' className="active">
            <HandySvg src={iconHome} className="Navigation__icon" width="20" height="20" />
            My page
          </a>
        </li>
        <li>
          <a href='#'>
            <HandySvg src={iconNews} className="Navigation__icon" width="20" height="20" />
            News
          </a>
        </li>
        <li>
          <a href='#'>
            <HandySvg src={iconMessages} className="Navigation__icon" width="20" height="20" />
            Messages
          </a>
        </li>
        <li>
          <a href='#'>
            <HandySvg src={iconFriend} className="Navigation__icon" width="15" height="15" />
            Friends
          </a>
        </li>
        <li>
          <a href='#'>
            <HandySvg src={iconCommunities} className="Navigation__icon" width="20" height="20" />
            Communities
          </a>
        </li>
        <li>
          <a href='#'>
            <HandySvg src={iconPhotos} className="Navigation__icon" width="20" height="20" />
            Photos
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;