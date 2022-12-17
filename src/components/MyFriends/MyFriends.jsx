import React from 'react';
import './MyFriends.css';
import './FriendsList/FriendsList';

const MyFriends = () => {
  return (
    <section className='myFriends'>
      <form className='myFriends__form'>
        <label className='myFriends__label'>
          <input className='myFriends__input' type="text" placeholder='Search Friends!'/>
        </label>
      </form>
    </section>
  );
};

export default MyFriends;