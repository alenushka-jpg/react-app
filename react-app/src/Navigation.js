/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import './App.css';

const Navigation = () => {
  return (
    <div className="Navigation">
      <ul className="Navigation__list">
        <li>
          <a href='#'>My page</a>
        </li>
        <li>
          <a href='#'>News</a>
        </li>
        <li>
          <a href='#'>Messages</a>
        </li>
        <li>
          <a href='#'>Friends</a>
        </li>
        <li>
          <a href='#'>Communities</a>
        </li>
        <li>
          <a href='#'>Photos</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;