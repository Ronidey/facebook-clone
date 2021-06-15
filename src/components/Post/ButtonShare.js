import React, { useContext } from 'react';
import ShareIcon from '@material-ui/icons/Share';
import ClickableDiv from '../Global/ClickableDiv';

import AppContext from '../../AppContext';
import { PostContext } from '../../AppContext';

function ButtonShare() {
  const { appDispatch } = useContext(AppContext);
  const post = useContext(PostContext);

  const handleClick = () => {
    if (!window.confirm('Do you want to share this post')) return;

    appDispatch({
      type: 'sharePost',
      payload: post.isShared ? post.post : post
    });
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ClickableDiv
      onClick={handleClick}
      aria-label='share'
      style={{ flex: '0 0 33.33%' }}
    >
      <div className='d-flex justify-center align-center p-relative'>
        <div className='d-flex align-center'>
          <ShareIcon />
          <span className='ml-sm fw-md'>Share</span>
        </div>
      </div>
    </ClickableDiv>
  );
}

export default ButtonShare;
