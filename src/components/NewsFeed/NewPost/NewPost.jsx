import React from 'react';
import './NewPost.css';
import PostSettings from './PostSettings/PostSettings';
import { HandySvg } from 'handy-svg';
import iconKebab from '../../../icon/icon-kebab.svg';

const NewPost = () => {
  return (
    <div className='newPost'>
      <div className='newPost__top'>
        <img src="https://avatarko.ru/img/kartinka/3/zhivotnye_sobaka_2456.jpg" weight='50' height='50' alt=""></img>
        <div className='newPost__data-user'>
          <span>Sepural Gallery</span>
          <span>15h, Public</span>
        </div>
        <button className='newPost__settings' type='button'>
          <HandySvg src={iconKebab} width="20" height="20" />
        </button>
      </div>
      <PostSettings />
      <img className='newPost__picture' src="https://assets.weforum.org/article/image/responsive_large_webp_6llmOwHcapGd0p2ilOGJBwKBQI8mnQfVmcI8Xi5F8aA.webp" weight='660' height='347' alt=""></img>
    </div>
  )
}

export default NewPost;