import React, { useRef, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 } from 'uuid';
import Avatar from '../Global/Avatar';
import './Chat.css';

import AppContext from '../../AppContext';
import SendForm from '../Global/SendForm';
import Message from './Message';

function ChatMob() {
  const { appState } = useContext(AppContext);
  const chatBodyRef = useRef(null);
  const { id } = useParams();
  const friend = appState.user.friends.find((u) => u.id == id);
  const [messages, setMessages] = useState([]);

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
      window.scroll({
        top: document.body.offsetHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [messages.length]);

  if (!friend) {
    return (
      <h1 className='text-center p-lg'>No Friend Found With The Given ID</h1>
    );
  }

  return (
    <div className='ChatMob'>
      <div className='ChatMob__body' ref={chatBodyRef}>
        <div className='ChatMob__body__intro text-center my-md'>
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
      <footer className='ChatMob__footer'>
        <SendForm onSubmit={sendMessage} />
      </footer>
    </div>
  );
}

export default ChatMob;
