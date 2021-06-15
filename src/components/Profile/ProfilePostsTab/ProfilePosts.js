import React, { useContext } from 'react';
import CreatePost from '../../CreatePost/CreatePost';
import ProfileIntro from './ProfileIntro';
import './ProfilePosts.css';

import AppContext from '../../../AppContext';
import Posts from '../../Post/Posts';

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

        <Posts posts={userPosts} />
      </div>
    </div>
  );
}

export default ProfilePosts;
