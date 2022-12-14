import React from 'react';
import './DialogItem.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <li>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  )
}


export default DialogItem;