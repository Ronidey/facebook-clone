import React from 'react';
import AddFriendList from '../Global/AddFriendList';

function Friends() {
  return (
    <div
      style={{
        background: '#fff',
        paddingTop: '2rem',
        boxShadow: '0 0 4px rgb(0 0 0 / 25%)',
        height: '100%'
      }}
    >
      <AddFriendList />
    </div>
  );
}

export default Friends;
