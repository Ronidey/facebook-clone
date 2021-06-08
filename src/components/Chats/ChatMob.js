import React, { useRef, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StyledLink from '../Global/StyledLink';
import Avatar from '../Global/Avatar';
import ChatForm from './ChatForm';
import './Chat.css';

import AppContext from '../../AppContext';

function ChatMob() {
  const { getUserById } = useContext(AppContext);
  const chatBodyRef = useRef(null);
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserById(id));
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className='ChatMob'>
      <div className='ChatMob__body' ref={chatBodyRef}>
        <div className='ChatMob__body__intro text-center my-md'>
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
          <div className='message message--right mb-md mx-sm'>
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
          <div className='message message--right mb-md mx-sm'>
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
      <footer className='ChatMob__footer'>
        <ChatForm />
      </footer>
    </div>
  );
}

export default ChatMob;
