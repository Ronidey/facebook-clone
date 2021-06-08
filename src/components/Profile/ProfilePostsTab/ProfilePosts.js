import React, { useContext } from 'react';
import CreatePost from '../../CreatePost/CreatePost';
import ProfileIntro from './ProfileIntro';
import './ProfilePosts.css';
import Post from '../../Post/Post';

import AppContext from '../../../AppContext';

function ProfilePosts({ user, myAccount, openEditInfo }) {
  const { appState } = useContext(AppContext);
  const userPosts = appState.posts.filter((p) => p.author.id === user.id);

  return (
    <div className='ProfilePosts'>
      <aside className='ProfilePosts__aside'>
        <ProfileIntro
          user={user}
          myAccount={myAccount}
          openEditInfo={openEditInfo}
        />
      </aside>
      <div className='ProfilePosts__posts'>
        {myAccount && <CreatePost />}

        <div>
          {userPosts.map((p) => (
            <Post key={p.id} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfilePosts;
