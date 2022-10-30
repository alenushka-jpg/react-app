import React from 'react';
import classes from './NewsField.module.css';

const NewsField = () => {
  return (
    <section className={classes.newsField}>
      <img src="https://avatarko.ru/img/kartinka/3/zhivotnye_sobaka_2456.jpg" alt=""></img>
      <form className={classes.newsField__form}>
        <label className={classes.newsField__label}>
          <input className={classes.newsField__input} type="text" name="news" placeholder='What is happening?'/>
        </label>
        <button className={classes.newsField__submit} type="submit">Post</button>
      </form>
    </section>
  );
};

export default NewsField;

