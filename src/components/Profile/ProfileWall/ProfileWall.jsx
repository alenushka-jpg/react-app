import React from 'react';
import './ProfileWall.css';
import News from '../../News/News';
import ProfileIntro from './ProfileIntro/ProfileIntro'

const ProfileWall = () => {
  return (
    <section className='profileWall'>
      <ProfileIntro />
      <News />
    </section>
  );
};

export default ProfileWall;