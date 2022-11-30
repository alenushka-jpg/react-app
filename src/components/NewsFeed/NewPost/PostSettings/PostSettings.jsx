import React from 'react';
import './PostSettings.css';
import { HandySvg } from 'handy-svg';
import iconHide from '../../../../icon/icon-eye-hide.svg';
import iconNotification from '../../../../icon/icon-notification.svg';
import iconAttention from '../../../../icon/icon-attention.svg';
import iconUnfollow from '../../../../icon/icon-user-unfollow.svg';

const SettingsItem = (props) => {
  return (
    <span className='postSettings__text'>{props.text}</span>
  )
}

const PostSettings = () => {
  let settingText = [
    { id: 1, text: 'Hide Post' },
    { id: 1, text: 'Turn on notification for this post' },
    { id: 1, text: 'Report this post' },
    { id: 1, text: 'Unfollow' },
  ]

  return (
    <ul className='postSettings'>
      <li>
        <button type='button'>
          <HandySvg src={iconHide} width="20" height="20" />
          <SettingsItem text={settingText[0].text} />
        </button>
      </li>
      <li>
        <button type='button'>
          <HandySvg src={iconNotification} width="20" height="20" />
          <SettingsItem text={settingText[1].text} />
        </button>
      </li>
      <li>
        <button type='button'>
          <HandySvg src={iconAttention} width="20" height="20" />
          <SettingsItem text={settingText[2].text} />
        </button>
      </li>
      <li>
        <button type='button'>
          <HandySvg src={iconUnfollow} width="20" height="20" />
          <SettingsItem text={settingText[3].text} />
        </button>
      </li>
    </ul>
  )
}

export default PostSettings;