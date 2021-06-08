import React, { useContext, useRef, useEffect } from 'react';
import StyledLink from '../Global/StyledLink';
import Avatar from '../Global/Avatar';
import './Chat.css';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';
import { IconButton } from '@material-ui/core';
import ChatForm from './ChatForm';

import AppContext from '../../AppContext';

function Chat({ user }) {
  const { appDispatch } = useContext(AppContext);
  const chatBodyRef = useRef(null);

  const handleMinimize = (e) => {
    appDispatch({
      type: 'chatMinimize',
      payload: e.currentTarget.dataset.user
    });
  };

  const handleRemove = (e) => {
    appDispatch({
      type: 'removeChat',
      payload: e.currentTarget.dataset.user
    });
  };

  useEffect(() => {
    const el = chatBodyRef.current;

    el.scroll({
      top: el.scrollHeight - el.offsetHeight,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className='Chat'>
      <header className='Chat__header d-flex align-center justify-between p-sm'>
        <div>
          <StyledLink to={`/users/${user.id}/profile`}>
            <div className='d-flex align-center'>
              <Avatar
                src={user.avatar}
                alt={user.firstName}
                className='mr-sm'
              />
              <span>{user.firstName}</span>
            </div>
          </StyledLink>
        </div>
        <div>
          <IconButton data-user={user.id} onClick={handleMinimize}>
            <RemoveIcon />
          </IconButton>

          <IconButton data-user={user.id} onClick={handleRemove}>
            <CloseIcon />
          </IconButton>
        </div>
      </header>
      <hr className='m-0' />

      <div className='Chat__body' ref={chatBodyRef}>
        <div className='Chat__body__intro text-center my-md'>
          <Avatar src={user.avatar} size='70px' />
          <h4>
            {user.firstName} {user.lastName}
          </h4>
          <p>Facebook</p>
          <p>You are friends on Facebook</p>
        </div>

        {/* Messages */}
        <div className='d-flex flex-column'>
          <div className='message message--left mb-md mx-sm'>
            <div className='message__user'>
              <Avatar src={user.avatar} size='30px' />
            </div>
            <div className='message__text'>
              Hi bro! how are you my friend? are you doing good? long time no
              see....
            </div>
          </div>

          <div className='message message--right mb-md mx-sm'>
            <div className='message__user'>
              <Avatar src={user.avatar} size='30px' />
            </div>
            <div className='message__text'>
              Hi bro! how are you my friend? are you doing good? long time no
              see....
            </div>
          </div>

          <div className='message message--left mb-md mx-sm'>
            <div className='message__user'>
              <Avatar src={user.avatar} size='30px' />
            </div>
            <div className='message__text'>
              Hi bro! how are you my friend? are you doing good? long time no
              see....
            </div>
          </div>

          <div className='message message--right mb-md mx-sm'>
            <div className='message__user'>
              <Avatar src={user.avatar} size='30px' />
            </div>
            <div className='message__text'>
              Hi bro! how are you my friend? are you doing good? long time no
              see....
            </div>
          </div>
        </div>
      </div>
      <footer className='Chat__footer'>
        <ChatForm />
      </footer>
    </div>
  );
}

export default Chat;
