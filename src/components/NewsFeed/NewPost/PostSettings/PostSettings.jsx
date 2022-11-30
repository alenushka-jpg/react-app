import React from 'react';
import './PostSettings.css';
import { HandySvg } from 'handy-svg';
import iconHide from '../../../../icon/icon-eye-hide.svg';
import iconNotification from '../../../../icon/icon-notification.svg';
import iconAttention from '../../../../icon/icon-attention.svg';
import iconUnfollow from '../../../../icon/icon-user-unfollow.svg';

const PostSettings = () => {
  return (
    <ul className='postSettings'>
      <li>
        <button type='button'>
          <HandySvg src={iconHide} width="20" height="20" />
          <span className='postSettings__text'>Hide Post</span>
        </button>
      </li>
      <li>
        <button type='button'>
          <HandySvg src={iconNotification} width="20" height="20" />
          <span className='postSettings__text'>Turn on notification for this post</span>
        </button>
      </li>
      <li>
        <button type='button'>
          <HandySvg src={iconAttention} width="20" height="20" />
          <span className='postSettings__text'>Report this post</span>
        </button>
      </li>
      <li>
        <button type='button'>
          <HandySvg src={iconUnfollow} width="20" height="20" />
          <span className='postSettings__text'>Unfollow</span>
        </button>
      </li>
    </ul>
  )
}

export default PostSettings;