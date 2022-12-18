import React from 'react';
import './NewsFeed.css';
import News from './News/News';
import NewPosts from './NewPost/NewPost';
import MyFriends from '../MyFriends/MyFriends';

const NewsFeed = (props) => {
  return (
    <section className='newsFeed'>
      <News />
      <NewPosts />
      <MyFriends friendsNames={props.friendsNames}/>
    </section>
  )
}

export default NewsFeed;