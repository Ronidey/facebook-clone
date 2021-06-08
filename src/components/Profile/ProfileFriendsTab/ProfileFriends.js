import React from 'react';
import ProfileFriend from './ProfileFriend';

function ProfileFriends({ user, myAccount }) {
  return (
    <div className='ProfileFriends'>
      <div className='card p-lg'>
        <h3 className='mb-lg'>Friends</h3>
        <div className='PrfileFriends__container'>
          {user.friends.map((f) => (
            <ProfileFriend key={f.id} user={f} myAccount={myAccount} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileFriends;
