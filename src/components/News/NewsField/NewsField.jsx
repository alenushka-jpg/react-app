import React from 'react';
import classes from './NewsField.module.css';

const NewsField = () => {
  return (
    <section className={classes.newsField}>
      <img src="https://avatarko.ru/img/kartinka/3/zhivotnye_sobaka_2456.jpg" alt=""></img>
      <form className={classes.form}>
        <label className={classes.label}>
          <input className={classes.input} type="text" name="news" placeholder='What is happening?'/>
        </label>
        <button className={classes.submit} type="submit">Post</button>
      </form>
    </section>
  );
};

export default NewsField;

