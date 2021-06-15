import React, { useContext, useRef, useEffect, useState } from 'react';
import StyledLink from '../Global/StyledLink';
import Avatar from '../Global/Avatar';
import './Chat.css';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';
import { IconButton } from '@material-ui/core';

import AppContext from '../../AppContext';
import SendForm from '../Global/SendForm';
import Message from './Message';
import { v4 } from 'uuid';

function Chat({ friend }) {
  const { appState, appDispatch } = useContext(AppContext);
  const [messages, setMessages] = useState([]);
  const chatBodyRef = useRef(null);

  const handleMinimize = (e) => {
    appDispatch({
      type: 'chatMinimize',
      payload: e.currentTarget.dataset.friend
    });
  };

  const handleRemove = (e) => {
    appDispatch({
      type: 'removeChat',
      payload: e.currentTarget.dataset.friend
    });
  };

  const sendMessage = (text) => {
    setMessages([
      ...messages,
      {
        id: v4(),
        user: appState.user,
        text
      }
    ]);
  };

  useEffect(() => {
    if (messages.length) {
      const el = chatBodyRef.current;

      el.scroll({
        top: el.scrollHeight - el.offsetHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [messages.length]);

  return (
    <div className='Chat'>
      <header className='Chat__header d-flex align-center justify-between p-sm'>
        <div>
          <StyledLink to={`/users/${friend.id}/profile`}>
            <div className='d-flex align-center'>
              <Avatar
                src={friend.avatar}
                alt={friend.firstName}
                className='mr-sm'
              />
              <span>{friend.firstName}</span>
            </div>
          </StyledLink>
        </div>
        <div>
          <IconButton data-friend={friend.id} onClick={handleMinimize}>
            <RemoveIcon />
          </IconButton>

          <IconButton data-friend={friend.id} onClick={handleRemove}>
            <CloseIcon />
          </IconButton>
        </div>
      </header>
      <hr className='m-0' />

      <div className='Chat__body' ref={chatBodyRef}>
        <div className='Chat__body__intro text-center my-md'>
          <Avatar src={friend.avatar} size='70px' />
          <h4>
            {friend.firstName} {friend.lastName}
          </h4>
          <p>Facebook</p>
          <p>You are friends on Facebook</p>
        </div>

        {/* Messages */}
        <div className='d-flex flex-column'>
          {messages.map((m) => (
            <Message
              key={m.id}
              message={m}
              isMyMessage={appState.user.id == m.user.id}
            />
          ))}
        </div>
      </div>
      <footer className='Chat__footer'>
        <SendForm onSubmit={sendMessage} />
      </footer>
    </div>
  );
}

export default Chat;
