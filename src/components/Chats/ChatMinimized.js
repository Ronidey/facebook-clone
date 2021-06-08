import React, { useContext } from 'react';
import Avatar from '../Global/Avatar';
import ClickableDiv from '../Global/ClickableDiv';

import AppContext from '../../AppContext';

function ChatMinimized({ chats }) {
  const { appDispatch } = useContext(AppContext);

  const root = {
    position: 'fixed',
    right: 0,
    bottom: 0,
    padding: '1rem'
  };

  const handleClick = (e) => {
    appDispatch({
      type: 'chatMaximize',
      payload: e.currentTarget.dataset.user
    });
  };

  return (
    <div style={root} className='ChatMinimized-wrapper'>
      {chats.map((c) => (
        <ClickableDiv
          data-user={c.user.id}
          onClick={handleClick}
          key={c.user.id}
          style={{ padding: 0, marginBottom: '0.5rem', borderRadius: '50%' }}
        >
          <Avatar src={c.user.avatar} alt={c.user.firstName} size='70px' />
        </ClickableDiv>
      ))}
    </div>
  );
}

export default ChatMinimized;
