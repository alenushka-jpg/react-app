import React from 'react';
import './Messages.css';
import DialogItem from './DialogItem/DialogItem'
import DialogText from './DialogText/DialogText'

const Messages = () => {

  let name = [
    {id: 1, name: 'Jagrit Protap Bill'},
    {id: 1, name: 'Tamara Kamil'},
    {id: 1, name: 'Patrica Nixon'},
    {id: 1, name: 'Sam Boerger'},
    {id: 1, name: 'Jessica Keol'},
    {id: 1, name: 'Lieke Jonas'},
  ]

  let message = [
    {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    {id: 1, text: 'Morbi maximus sit amet nisl placerat tristique. Mauris maximus posuere ante ac rhoncus.'},
    {id: 1, text: 'Donec tincidunt aliquet neque, eu suscipit enim consequat nec.'},
    {id: 1, text: 'Maecenas hendrerit fermentum leo eget mollis. In finibus leo in enim lobortis lacinia.'},
    {id: 1, text: 'Nulla facilisi. Donec sed odio enim. Integer eu hendrerit neque, eget convallis nibh. '},
    {id: 1, text: 'Donec pellentesque vitae eros vitae sollicitudin. Nullam sed dui id lorem eleifend faucibu'},
  ]

  let dialogsElements = name.map( d => <DialogItem name={d.name} id={d.id} />);
  let messageElements = message.map( m => <DialogText text={m.text} id={m.id} />);

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