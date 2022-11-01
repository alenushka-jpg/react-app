import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <section className={classes.profile}>
      <div className={classes.header}>
        <div className={classes.background}></div>
        <div className={classes.ownerProfile}>
          <img src="https://avatarko.ru/img/kartinka/3/zhivotnye_sobaka_2456.jpg" alt=""></img>
          <p className={classes.ownerInfo}>
            <span className={classes.ownerName}>Alyosha Popovich</span>
            <span className={classes.ownerProfession}>Front-end Developer</span>
          </p>
          
        </div>
      </div>
      

    </section>
  );
};

export default Profile;