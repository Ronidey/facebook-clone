import React from 'react';
import Avatar from '../Global/Avatar';
import './Message.css';

function Message({ message, isMyMessage }) {
  return (
    <div
      className={`Message mb-md mx-sm ${
        isMyMessage ? 'Message--right' : 'Message--left'
      }`}
    >
      <div className='Message__user'>
        <Avatar src={message.user.avatar} size='30px' />
      </div>
      <div className='Message__text'>{message.text}</div>
    </div>
  );
}

export default Message;
