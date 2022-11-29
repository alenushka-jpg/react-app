import React from 'react';
import './PostSettings.css';
import { HandySvg } from 'handy-svg';
import iconKebab from '../../../../icon/icon-kebab.svg';

const PostSettings = () => {
  return (
    <button className='postSettings'>
      <HandySvg src={iconKebab} width="20" height="20" />
    </button>
  )
}

export default PostSettings;