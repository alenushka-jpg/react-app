import React from 'react';
import './NewsField.css';

const NewsField = () => {
  return (
    <div className='newsField'>
      <img src="https://avatarko.ru/img/kartinka/3/zhivotnye_sobaka_2456.jpg" alt=""></img>
      <form className='newsField__form'>
        <label className='newsField__label'>
          <input className='newsField__input' type="text" name="news" placeholder='What is happening?'/>
        </label>
        <button className='newsField__submit' type="submit">Post</button>
      </form>
    </div>
  );
};

export default NewsField;

