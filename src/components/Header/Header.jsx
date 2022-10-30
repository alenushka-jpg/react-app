import React from 'react';
import classes from'./Header.module.css';
import {HandySvg} from 'handy-svg';
import mobile from '../../icon/mobile.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <HandySvg src={mobile} className="icon" width="46" height="46" />
        <p>Meetmax</p>
      </div>

      <form className={classes.header__form}>
        <label className={classes.header__label}>
          <input className={classes.header__input} type="text" name="name" placeholder='Search for something here..'/>
        </label>
      </form>

      <div className={classes.header__profileImg}>
        <span className={classes.header__profileName}>Alyosha Popovich</span>
        <img src="https://avatarko.ru/img/kartinka/3/zhivotnye_sobaka_2456.jpg" alt=""></img>
      </div>
    </header>
  );
};

export default Header;