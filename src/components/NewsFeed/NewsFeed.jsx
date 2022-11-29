import React from 'react';
import './NewsFeed.css';
import News from './News/News';
import NewPosts from './NewPost/NewPost';

const NewsFeed = () => {
  return (
    <section className='newsFeed'>
      <News />
      <NewPosts />
    </section>
  )
}

export default NewsFeed;