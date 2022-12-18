import React from 'react';
import './MyFriends.css';
import FriendsItem from './FriendsItem/FriendsItem';

const MyFriends = (props) => {
  const friendsElements = props.friendsNames.map((f) =>
    <FriendsItem key={f.name} name={f.name} id={f.id} />
  );

  return (
    <section className='myFriends'>
      <form className='myFriends__form'>
        <label className='myFriends__label'>
          <input className='myFriends__input' type="text" placeholder='Search Friends!' />
        </label>
      </form>
      <ul className='myFriends__list'>
        {friendsElements}
      </ul>
    </section>
  );
};

export default MyFriends;