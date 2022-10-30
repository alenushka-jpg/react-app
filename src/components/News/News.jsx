import React from 'react';
import classes from './News.module.css';
import NewsField from './NewsField/NewsField'

const News = () => {
  return (
    <section className={classes.news}>
      <NewsField />
    </section>
  );
};

export default News;
