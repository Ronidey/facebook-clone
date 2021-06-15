import React, { useState, useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ChatPageItem from './ChatPageItem';

import AppConext from '../../AppContext';
import './ChatPage.css';
import ChatMob from './ChatMob';

function ChatPage() {
  const { appState } = useContext(AppConext);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(appState.user.friends);
  }, []);

  return (
    <Switch>
      <Route exact path='/chat'>
        <div className='ChatPage'>
          {friends.map((f) => (
            <ChatPageItem key={f.id} user={f} />
          ))}
        </div>
      </Route>

      <Route path='/chat/users/:id'>
        <ChatMob />
      </Route>
    </Switch>
  );
}

export default ChatPage;
