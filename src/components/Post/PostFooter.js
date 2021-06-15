import React, { useState, useContext } from 'react';
import CommentArea from './CommentArea/CommentArea';
import PostFooterBottom from './PostFooterBottom';
import ReactionsInline from './ReactionsInline';

import { PostContext } from '../../AppContext';

function PostFooter() {
  const post = useContext(PostContext);
  const [showComments, setShowComments] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowComments(true);
  };

  return (
    <footer className='Post__footer'>
      <div className='d-flex align-center'>
        <ReactionsInline />
        <a href='#' role='button' className='ml-auto' onClick={handleClick}>
          {post.comments.length} comments
        </a>
      </div>
      <hr />
      <PostFooterBottom displayComments={setShowComments} />
      <hr style={{ marginBottom: '0.5rem' }} />
      {showComments && <CommentArea />}
    </footer>
  );
}

export default PostFooter;
