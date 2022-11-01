import React from 'react';
import './Header.css';
import {HandySvg} from 'handy-svg';
import mobile from '../../icon/mobile.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <HandySvg src={mobile} width="46" height="46" />
        <p>Meetmax</p>
      </div>

      <form className='header__form'>
        <label className='header__label'>
          <input className='header__input' type="text" name="name" placeholder='Search for something here..'/>
        </label>
      </form>

      <div className='header__profileImg'>
        <span className='header__profileName'>Alyosha Popovich</span>
        <img src="https://avatarko.ru/img/kartinka/3/zhivotnye_sobaka_2456.jpg" alt=""></img>
      </div>
    </header>
  );
};

export default Header;