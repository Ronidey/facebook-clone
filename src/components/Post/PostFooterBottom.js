import React from 'react';
import ButtonLike from './ButtonLike';
import ButtonComment from './ButtonComment';
import ButtonShare from './ButtonShare';

function PostFooterBottom(props) {
  const handleCommentClick = () => {
    props.displayComments(true);
  };

  return (
    <div className='Post__footer__bottom d-flex'>
      <ButtonLike />
      <ButtonComment onClick={handleCommentClick} />
      <ButtonShare />
    </div>
  );
}

export default PostFooterBottom;
