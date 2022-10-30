import React from 'react';
import './App.css';
import {HandySvg} from 'handy-svg';
import mobile from './icon/mobile.svg';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__logo">
        <HandySvg src={mobile} className="icon" width="46" height="46" />
        <p>Meetmax</p>
      </div>

      <form className="Header__form">
        <label className="Header__label">
          <input className="Header__input" type="text" name="name" placeholder='Search for something here..'/>
        </label>
      </form>

      <div className="Header__profileImg">
        <span className="Header__profileName">Alyosha Popovich</span>
        <img src="https://avatarko.ru/img/kartinka/3/zhivotnye_sobaka_2456.jpg" alt=""></img>
      </div>
    </header>
  );
};

export default Header;