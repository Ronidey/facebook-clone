import React, { useContext } from 'react';
import Post from '../Post/Post';
import AppContext from '../../AppContext';

function Feed() {
  const { appState } = useContext(AppContext);

  return (
    <div className='Feed'>
      <div className='Feed__posts'>
        {appState.posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
