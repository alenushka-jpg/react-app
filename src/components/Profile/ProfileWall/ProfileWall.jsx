import React from 'react';
import './ProfileWall.css';
import NewsField from '../../News/NewsField/NewsField';
import ProfileIntro from './ProfileIntro/ProfileIntro'

const ProfileWall = () => {
  return (
    <section className='profileWall'>
      <ProfileIntro />
      <NewsField />
    </section>
  );
};

export default ProfileWall;