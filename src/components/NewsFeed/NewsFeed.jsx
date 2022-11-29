import React from 'react';
import './NewsFeed.css';
import News from './News/News';

const NewsFeed = () => {
  return (
    <section className='newsFeed'>
      <News />
    </section>
  )
}

export default NewsFeed;