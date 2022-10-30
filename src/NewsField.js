import React from 'react';
import './App.css';

const NewsField = () => {
  return (
    <section className="NewsField">
      <img src="https://avatarko.ru/img/kartinka/3/zhivotnye_sobaka_2456.jpg" alt=""></img>
      <form className="NewsField__form">
        <label className="NewsField__label">
          <input className="NewsField__input" type="text" name="news" placeholder='What is happening?'/>
        </label>
        <button className="NewsField__submit" type="submit">Post</button>
      </form>
    </section>
  );
};

export default NewsField;

