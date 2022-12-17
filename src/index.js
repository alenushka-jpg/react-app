import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const messagesNameUser = [
  {id: 1, name: 'Jagrit Protap Bill'},
  {id: 2, name: 'Tamara Kamil'},
  {id: 3, name: 'Patrica Nixon'},
  {id: 4, name: 'Sam Boerger'},
  {id: 5, name: 'Jessica Keol'},
  {id: 6, name: 'Lieke Jonas'},
]

const messagesText = [
  {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  {id: 2, text: 'Morbi maximus sit amet nisl placerat tristique. Mauris maximus posuere ante ac rhoncus.'},
  {id: 3, text: 'Donec tincidunt aliquet neque, eu suscipit enim consequat nec.'},
  {id: 4, text: 'Maecenas hendrerit fermentum leo eget mollis. In finibus leo in enim lobortis lacinia.'},
  {id: 5, text: 'Nulla facilisi. Donec sed odio enim. Integer eu hendrerit neque, eget convallis nibh. '},
  {id: 6, text: 'Donec pellentesque vitae eros vitae sollicitudin. Nullam sed dui id lorem eleifend faucibu'},
]

const friendsNameUser = [
  {id: 1, name: 'Kayleigh Bysouth'},
  {id: 2, name: 'Jess Phillips MP'},
  {id: 3, name: 'Eslam Hisham'},
  {id: 4, name: 'Tamara Kamil'},
  {id: 5, name: 'Levizja Vetvendos'},
  {id: 6, name: 'Jagrit Protap Bill'},
  {id: 7, name: 'Afrim Konjufca'},
  {id: 8, name: 'Patrica Nixon'},
  {id: 9, name: 'Adayin Vetvendosje'},
  {id: 10, name: 'Albini Vjosa'},
  {id: 11, name: 'Eduardo Ortega'},
  {id: 12, name: 'Vasin Kawakamu'},
  {id: 13, name: 'Sam Boerger'},
  {id: 14, name: 'Edilson De Carvalho'},
  {id: 15, name: 'Jessica Keol'},
  {id: 16, name: 'Albini Vjosa Glauki'},
  {id: 17, name: 'Muhamet Murteza'},
  {id: 18, name: 'Lieke Jonas'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messagesNameUser={messagesNameUser} messagesText={messagesText} friendsNameUser={friendsNameUser}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
