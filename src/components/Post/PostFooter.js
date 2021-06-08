import React from 'react';
import PostFooterBottom from './PostFooterBottom';
import ReactionsInline from './ReactionsInline';

function PostFooter() {
  return (
    <footer className='Post__footer'>
      <ReactionsInline />
      <hr />
      <PostFooterBottom />
      <hr style={{ marginBottom: '0.5rem' }} />
    </footer>
  );
}

export default PostFooter;
