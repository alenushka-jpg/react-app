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

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li>
          <a className='navigation__link active' href='/profile'>
            <HandySvg src={iconHome} width="20" height="20" />
            My profile
          </a>
        </li>
        <li>
          <a className='navigation__link' href='/news'>
            <HandySvg src={iconNews} width="20" height="20" />
            News
          </a>
        </li>
        <li>
          <a className='navigation__link' href='/messages'>
            <HandySvg src={iconMessages} width="20" height="20" />
            Messages
          </a>
        </li>
        <li>
          <a className='navigation__link' href='/friends'>
            <HandySvg src={iconFriend} width="15" height="15" />
            Friends
          </a>
        </li>
        <li>
          <a className='navigation__link' href='/communities'>
            <HandySvg src={iconCommunities} width="20" height="20" />
            Communities
          </a>
        </li>
        <li>
          <a className='navigation__link' href='/photos'>
            <HandySvg src={iconPhotos} width="20" height="20" />
            Photos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;