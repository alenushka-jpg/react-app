import React from 'react';
import './Messages.css';
import DialogItem from './DialogItem/DialogItem';
import DialogText from './DialogText/DialogText';

const Messages = (props) => {
  const namesUsers = props.messagesNameUser;
  const dialogsElements = namesUsers.map((nameUser) =>
    <DialogItem key={nameUser.name} name={nameUser.name} />
  );

  const messagesText = props.messagesText;
  const messagesElements = messagesText.map((message) =>
    <DialogText key={message.text} text={message.text} id={message.id} />
  );

  return (
    <div className='messages'>
      <ul className='messages__dialog-name'>
        {dialogsElements}
      </ul>

      <ul className='messages__dialog-text'>
        {messagesElements}
      </ul>
    </div>
  );
};

export default Messages;