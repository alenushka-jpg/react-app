import React from 'react';
import './FriendsItem.css';

const FriendsItem = (props) => {
  return (
    <li>{props.name}</li>
  );
};

export default FriendsItem;