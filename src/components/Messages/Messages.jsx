import React from 'react';
import './Messages.css';
import DialogItem from './DialogItem/DialogItem';
import DialogText from './DialogText/DialogText';

const Messages = (props) => {
  const dialogsElements = props.userNames.map((n) =>
    <DialogItem key={n.name} name={n.name} />
  );

  const messagesElements = props.dialogs.map((m) =>
    <DialogText key={m.text} text={m.text} id={m.id} />
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