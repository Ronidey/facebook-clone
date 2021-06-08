import React from 'react';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ClickableDiv from '../Global/ClickableDiv';

function ButtonComment() {
  return (
    <ClickableDiv aria-label='comment' style={{ flex: '0 0 33.33%' }}>
      <div className='d-flex justify-center align-center p-relative'>
        <div className='d-flex align-center'>
          <ChatOutlinedIcon />
          <span className='ml-sm fw-md'>Comment</span>
        </div>
      </div>
    </ClickableDiv>
  );
}

export default ButtonComment;
