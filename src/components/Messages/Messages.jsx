import React from 'react';
import './Messages.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <NavLink to={path}>{props.name}</NavLink>
  )
}

const Messages = () => {
  return (
    <div className='messages'>
      <ul className='messages__dialog-name'>
        <li>
          <DialogsItem name='Jagrit Protap Bill' id='1'/>
        </li>
        <li>
          <DialogsItem name='Tamara Kamil' id='2'/>
        </li>
        <li>
          <DialogsItem name='Patrica Nixon' id='3'/>
        </li>
        <li>
          <DialogsItem name='Sam Boerger' id='4'/>
        </li>
        <li>
          <DialogsItem name='Jessica Keol' id='5'/>
        </li>
        <li>
          <DialogsItem name='Lieke Jonas' id='6'/>
        </li>
      </ul>
      <ul className='messages__dialog-text'>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </li>
        <li>
          Morbi maximus sit amet nisl placerat tristique. Mauris maximus posuere ante ac rhoncus. 
        </li>
        <li>
          Donec tincidunt aliquet neque, eu suscipit enim consequat nec. 
        </li>
        <li>
          Maecenas hendrerit fermentum leo eget mollis. In finibus leo in enim lobortis lacinia.
        </li>
        <li>
          Nulla facilisi. Donec sed odio enim. Integer eu hendrerit neque, eget convallis nibh. 
        </li>
        <li>
          Donec pellentesque vitae eros vitae sollicitudin. Nullam sed dui id lorem eleifend faucibus. 
        </li>
      </ul>
    </div>
  );
};

export default Messages;