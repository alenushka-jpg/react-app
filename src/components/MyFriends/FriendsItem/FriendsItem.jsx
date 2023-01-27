import React from 'react';
import './FriendsItem.css';
import { NavLink } from 'react-router-dom';

const FriendsItem = (props) => {
  let path = "/friends/" + props.id;

  return (
    <li>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  );
};

export default FriendsItem;