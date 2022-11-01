import React from 'react';
import './ProfileIntro.css';
import {HandySvg} from 'handy-svg';
import iconGender from '../../../../icon/icon-gender.svg';
import iconGift from '../../../../icon/icon-gift.svg';
import iconLocation from '../../../../icon/icon-location.svg';
import iconPhone from '../../../../icon/icon-phone.svg'

const ProfileIntro = () => {
  return (
    <section className='profileIntro'>
      <h2>INTRO</h2>
      <div className='profileIntro__info'>
        <p>
          <HandySvg src={iconGender} width="25" height="25" />
          Male
        </p>
        <p>
          <HandySvg src={iconGift} width="25" height="25" />
          Born January 19, 1999
        </p>
        <p>
          <HandySvg src={iconLocation} width="25" height="25" />
          Givatayim, Israel
        </p>
        <p>
          <HandySvg src={iconPhone} width="19" height="32" />
          <a href='tel:+375256999877'>+375256999877</a>
        </p>
      </div>
    </section>
  );
};

export default ProfileIntro;