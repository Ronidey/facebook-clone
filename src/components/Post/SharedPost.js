import React, { useContext } from 'react';
import AppContext from '../../AppContext';
import { PostContext } from '../../AppContext';
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostFooter from './PostFooter';

function SharedPost({ post }) {
  const { appState, appDispatch } = useContext(AppContext);

  const deletePost = (e) => {
    appDispatch({
      type: 'deletePost',
      payload: post.id
    });
  };

  return (
    <PostContext.Provider value={post}>
      <div className='SharedPost card my-lg'>
        <PostHeader
          menu={appState.user.id == post.author.id}
          author={post.author}
          deletePost={deletePost}
        />
        <hr style={{ margin: '0.25rem 0' }} />

        <div className='SharedPost__body px-lg'>
          <div className='SharedPost__inner'>
            {/* Inner Post */}
            <PostHeader menu={false} author={post.post.author} />
            <hr style={{ margin: '0.25rem 0' }} />

            <PostBody text={post.post.text} img={post.post.img} />
            <hr />
          </div>
        </div>

        <PostFooter />
        <br />
      </div>
    </PostContext.Provider>
  );
}

export default SharedPost;
