import React from 'react';
import ButtonLike from './ButtonLike';
import ButtonComment from './ButtonComment';
import ButtonShare from './ButtonShare';

function PostFooterBottom() {
  return (
    <div className='Post__footer__bottom d-flex'>
      <ButtonLike />
      <ButtonComment />
      <ButtonShare />
    </div>
  );
}

export default PostFooterBottom;
