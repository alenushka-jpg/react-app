import React from 'react';
import './App.css';

const Header = () => {
  return (
    <div className="Header__container">
      <ul className="Header__list">
        <li>My page</li>
        <li>News</li>
        <li>Messages</li>
        <li>Friends</li>
        <li>Communities</li>
        <li>Photos</li>
      </ul>
    </div>
  );
}

export default Header;