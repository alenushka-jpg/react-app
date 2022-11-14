import React from 'react';
import './ProfileHeader.css';

const ProfileHeader = () => {
  return (
    <section className='profileHeader'>
      <div className='profileHeader__background'></div>
      <div className='profileHeader__ownerProfile'>
        <img src="https://avatarko.ru/img/kartinka/3/zhivotnye_sobaka_2456.jpg" alt=""></img>
        <p className='profileHeader__ownerInfo'>
          <span className='profileHeader__ownerName'>Alyosha Popovich</span>
          <span className='profileHeader__ownerProfession'>Front-end Developer</span>
        </p>
      </div>
    </section>
  )
}

export default ProfileHeader;