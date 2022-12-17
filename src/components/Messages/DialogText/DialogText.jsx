import React from 'react';
import './DialogText.css';

const DialogText = (props) => {

  return (
    <li key={props}>{props.text}</li>
  )
}

export default DialogText;