import React from 'react';
import './Profile.css';
import ProfileWall from './ProfileWall/ProfileWall'

const Profile = () => {
  return (
    <section className='profile'>
      <div className='profile__header'>
        <div className='profile__background'></div>
        <div className='profile__ownerProfile'>
          <img src="https://avatarko.ru/img/kartinka/3/zhivotnye_sobaka_2456.jpg" alt=""></img>
          <p className='profile__ownerInfo'>
            <span className='profile__ownerName'>Alyosha Popovich</span>
            <span className='profile__ownerProfession'>Front-end Developer</span>
          </p>
        </div>
      </div>
      <ProfileWall />
    </section>
  );
};

export default Profile;