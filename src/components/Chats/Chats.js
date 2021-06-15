import React from 'react';
import Chat from './Chat';
import ChatMinimized from './ChatMinimized';

function Chats({ chats }) {
  const minimizedChat = chats.filter((c) => c.minimize);
  return (
    <div>
      <div>
        {chats.map(
          (c) => !c.minimize && <Chat key={c.user.id} friend={c.user} />
        )}
      </div>
      {minimizedChat.length && <ChatMinimized chats={minimizedChat} />}
    </div>
  );
}

export default Chats;
