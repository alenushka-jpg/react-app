import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let nameUser = [
  {id: 1, name: 'Jagrit Protap Bill'},
  {id: 1, name: 'Tamara Kamil'},
  {id: 1, name: 'Patrica Nixon'},
  {id: 1, name: 'Sam Boerger'},
  {id: 1, name: 'Jessica Keol'},
  {id: 1, name: 'Lieke Jonas'},
]

let textMessage = [
  {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {id: 1, text: 'Morbi maximus sit amet nisl placerat tristique. Mauris maximus posuere ante ac rhoncus.'},
  {id: 1, text: 'Donec tincidunt aliquet neque, eu suscipit enim consequat nec.'},
  {id: 1, text: 'Maecenas hendrerit fermentum leo eget mollis. In finibus leo in enim lobortis lacinia.'},
  {id: 1, text: 'Nulla facilisi. Donec sed odio enim. Integer eu hendrerit neque, eget convallis nibh. '},
  {id: 1, text: 'Donec pellentesque vitae eros vitae sollicitudin. Nullam sed dui id lorem eleifend faucibu'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App nameUser={nameUser} textMessage={textMessage}/>

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
