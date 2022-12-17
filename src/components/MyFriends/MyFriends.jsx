import React from 'react';
import './MyFriends.css';
import FriendsItem from './FriendsItem/FriendsItem';

const MyFriends = (props) => {
  const friendsNames = props.friendsNameUser;
  const friendsElements = friendsNames.map((friendName) =>
    <FriendsItem key={friendName.name} name={friendName.name} id={friendName.id} />
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