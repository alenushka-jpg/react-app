import React from 'react';
import './Messages.css';
import { NavLink } from 'react-router-dom';

const Messages = () => {
  return (
    <div className='messages'>
      <ul className='messages__list-name'>
        <li>
          <NavLink to='/dialogs/1'>
            <img src="https://xage.ru/media/posts/2013/6/5/dogs-dressed-like-humans_3.jpg" width='41' height='41' alt=""></img>
            <p>Jagrit Protap Bill</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/dialogs/2'>
            <img src="https://oir.mobi/uploads/posts/2021-05/1620836820_33-oir_mobi-p-smeshnie-mordi-sobak-zhivotnie-krasivo-fot-34.jpg" width='41' height='41' alt=""></img>
            <p>Tamara Kamil</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/dialogs/3'>
            <img src="https://static5.depositphotos.com/1004199/419/i/450/depositphotos_4193148-stock-photo-portrait-of-a-funny-chihuahua.jpg" width='41' height='41' alt=""></img>
            <p>Patrica Nixon</p>
          </NavLink>
        </li>
        <li>
        <NavLink to='/dialogs/4'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFDSEs1hx4yHY5rtj79QwgSSBcUvTJ-dS_DWUXMfx4fpqdQR8v8G_qAA23zc1UljT9xw&usqp=CAU" width='41' height='41' alt=""></img>
          <p>Sam Boerger</p>
        </NavLink>
        </li>
        <li>
          <NavLink to='/dialogs/5'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8VXjALheqSeRjdVpBBVKthisa4hfvECCOew&usqp=CAU" width='41' height='41' alt=""></img>
            <p>Jessica Keol</p>
          </NavLink>
        </li>
        <li>
          <NavLink to='/dialogs/6'>
            <img src="https://klike.net/uploads/posts/2019-03/1553067449_3.jpg" width='41' height='41' alt=""></img>
            <p>Lieke Jonas</p>
          </NavLink>
        </li>
      </ul>
      <ul className='messages__list-dialogs'>
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