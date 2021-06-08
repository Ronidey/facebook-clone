import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import Post from './Post';

function Posts() {
  const { appState } = useContext(AppContext);

  return (
    <div className='Posts'>
      {appState.posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}

export default Posts;
