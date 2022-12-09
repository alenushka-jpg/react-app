import React from 'react';
import './Messages.css';
import DialogItem from './DialogItem/DialogItem';
import DialogText from './DialogText/DialogText';

const Messages = (props) => {

  let dialogsElements = 
  props.nameUser.map( d => <DialogItem name={d.name} id={d.id} />);

  let messageElements = 
  props.textMessage.map( m => <DialogText text={m.text} id={m.id} />);

  return (
    <div className='messages'>
      <ul className='messages__dialog-name'>
        {dialogsElements}
      </ul>

      <ul className='messages__dialog-text'>
        {messageElements}
      </ul>
    </div>
  );
};

export default Messages;