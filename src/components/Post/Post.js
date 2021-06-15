import React, { useContext } from 'react';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import './Post.css';
import PostFooter from './PostFooter';

import AppContext from '../../AppContext';
import { PostContext } from '../../AppContext';

function Post({ post }) {
  const { appState, appDispatch } = useContext(AppContext);

  const editPost = () => {
    appDispatch({
      type: 'editPost',
      payload: { id: post.id, text: post.text }
    });
  };

  const deletePost = () => {
    appDispatch({
      type: 'deletePost',
      payload: post.id
    });
  };

  return (
    <PostContext.Provider value={post}>
      <div className='Post my-lg card'>
        <PostHeader
          author={post.author}
          editPost={editPost}
          deletePost={deletePost}
          postId={post.id}
          menu={appState.user.id == post.author.id}
        />
        <hr style={{ margin: '0.25rem 0' }} />

        <PostBody text={post.text} img={post.img} />
        <hr />

        <PostFooter />
      </div>
    </PostContext.Provider>
  );
}

export default Post;
