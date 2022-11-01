import React from 'react';
import classes from './MyFriends.module.css';

const MyFriends = () => {
  return (
    <section className={classes.myFriends}>
      <form className={classes.form}>
        <label className={classes.label}>
          <input className={classes.input} type="text" placeholder='Search Friends!'/>
        </label>
      </form>
    </section>
  );
};

export default MyFriends;