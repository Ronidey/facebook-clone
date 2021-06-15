import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import Post from './Post';
import SharedPost from './SharedPost';

function Posts({ posts }) {
  const { appState } = useContext(AppContext);
  const allPosts = posts || appState.posts;

  return (
    <div className='Posts'>
      {allPosts.map((p) => {
        if (p.isShared) {
          return <SharedPost key={p.id} post={p} />;
        }
        return <Post key={p.id} post={p} />;
      })}
    </div>
  );
}

export default Posts;
