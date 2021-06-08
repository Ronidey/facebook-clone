import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import ClickableDiv from '../Global/ClickableDiv';

function ButtonShare() {
  return (
    <ClickableDiv aria-label='share' style={{ flex: '0 0 33.33%' }}>
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
