import React from 'react';
import './NewPost.css';
import PostSettings from './PostSettings/PostSettings';
import { HandySvg } from 'handy-svg';
import iconKebab from '../../../icon/icon-kebab.svg';
import iconLike from '../../../icon/icon-like.svg';
import iconComments from '../../../icon/icon-comments.svg';
import iconShare from '../../../icon/icon-share.svg';
import iconSend from '../../../icon/icon-send.svg';


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
      <div className='newPost__user-block'>
        <button className='newPost__button' type='button'>
          <HandySvg src={iconLike} width="25" height="25" />
        </button>
        <button className='newPost__button' type='button'>
          <HandySvg src={iconComments} width="25" height="25" />
        </button>
        <button className='newPost__button' type='button'>
          <HandySvg src={iconShare} width="25" height="25" />
        </button>
      </div>
      <div className='newPost__comments-block'>
        <img src="https://avatarko.ru/img/kartinka/3/zhivotnye_sobaka_2456.jpg" weight='50' height='50' alt=""></img>
        <form className='newPost__form'>
          <label>
            <span className="visually-hidden">Write your comment</span>
            <textarea className='newPost__textarea' name="message" placeholder='Write a comment...'></textarea>
          </label>
          {/* <label className='newPost__add-attachment'>
            <input type="file" accept="image/*,text/html,text/css"></input>
          </label> */}
          <button className="newPost__submit" type='submit'>
            <span className="visually-hidden">Submit your comment</span>
            <HandySvg src={iconSend} width="25" height="25" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewPost;