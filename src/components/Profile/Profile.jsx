import React from 'react';
import './Profile.css';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileWall from './ProfileWall/ProfileWall';

const Profile = () => {
  return (
    <section className='profile'>
      <ProfileHeader />
      <ProfileWall />
    </section>
  );
};

export default Profile;