import React, { useContext, useEffect, useRef } from 'react';
import Comments from './Comments';
import SendForm from '../../Global/SendForm';

import AppContext, { PostContext } from '../../../AppContext';

function CommentArea() {
  const { appDispatch } = useContext(AppContext);
  const post = useContext(PostContext);
  const commentRef = useRef(null);

  const handleSubmit = (comment) => {
    appDispatch({
      type: 'addComment',
      payload: { postId: post.id, comment }
    });
  };

  useEffect(() => {
    const el = commentRef.current;
    el.scroll({
      top: el.scrollHeight - el.offsetHeight,
      left: 0,
      behavior: 'smooth'
    });
  }, [, post.comments.length]);

  return (
    <div className='p-md'>
      <Comments ref={commentRef} />
      <SendForm onSubmit={handleSubmit} />
    </div>
  );
}

export default CommentArea;
