/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import classes from './Navigation.module.css';
import {HandySvg} from 'handy-svg';
import iconHome from '../../icon/icon-home.svg';
import iconNews from '../../icon/icon-news.svg';
import iconMessages from '../../icon/icon-messages.svg';
import iconFriend from '../../icon/icon-friend.svg';
import iconCommunities from '../../icon/icon-communities.svg';
import iconPhotos from '../../icon/icon-photos.svg';

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li>
          <a className={`${classes.link} ${classes.active}`} href='#'>
            <HandySvg src={iconHome} width="20" height="20" />
            My page
          </a>
        </li>
        <li>
          <a className={classes.link} href='#'>
            <HandySvg src={iconNews} width="20" height="20" />
            News
          </a>
        </li>
        <li>
          <a className={classes.link} href='#'>
            <HandySvg src={iconMessages} width="20" height="20" />
            Messages
          </a>
        </li>
        <li>
          <a className={classes.link} href='#'>
            <HandySvg src={iconFriend} width="15" height="15" />
            Friends
          </a>
        </li>
        <li>
          <a className={classes.link} href='#'>
            <HandySvg src={iconCommunities} width="20" height="20" />
            Communities
          </a>
        </li>
        <li>
          <a className={classes.link} href='#'>
            <HandySvg src={iconPhotos} width="20" height="20" />
            Photos
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;