import React from 'react';
import './Messages.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <li>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  )
}

const DialogsText = (props) => {

  return (
    <li>{props.text}</li>
  )
}

const Messages = () => {

  let dialogName = [
    {id: 1, name: 'Jagrit Protap Bill'},
    {id: 1, name: 'Tamara Kamil'},
    {id: 1, name: 'Patrica Nixon'},
    {id: 1, name: 'Sam Boerger'},
    {id: 1, name: 'Jessica Keol'},
    {id: 1, name: 'Lieke Jonas'},
  ]

  let dialogMessage = [
    {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 1, text: 'Morbi maximus sit amet nisl placerat tristique. Mauris maximus posuere ante ac rhoncus.'},
    {id: 1, text: 'Donec tincidunt aliquet neque, eu suscipit enim consequat nec.'},
    {id: 1, text: 'Maecenas hendrerit fermentum leo eget mollis. In finibus leo in enim lobortis lacinia.'},
    {id: 1, text: 'Nulla facilisi. Donec sed odio enim. Integer eu hendrerit neque, eget convallis nibh. '},
    {id: 1, text: 'Donec pellentesque vitae eros vitae sollicitudin. Nullam sed dui id lorem eleifend faucibu'},
  ]

  return (
    <div className='messages'>
      <ul className='messages__dialog-name'>
        <DialogsItem name={dialogName[0].name} />
        <DialogsItem name={dialogName[1].name} />
        <DialogsItem name={dialogName[2].name} />
        <DialogsItem name={dialogName[3].name} />
        <DialogsItem name={dialogName[4].name} />
        <DialogsItem name={dialogName[5].name} />
      </ul>

      <ul className='messages__dialog-text'>
        <DialogsText text={dialogMessage[0].text} />
        <DialogsText text={dialogMessage[1].text} />
        <DialogsText text={dialogMessage[2].text} />
        <DialogsText text={dialogMessage[3].text} />
        <DialogsText text={dialogMessage[4].text} />
        <DialogsText text={dialogMessage[5].text} />
      </ul>
    </div>
  );
};

export default Messages;