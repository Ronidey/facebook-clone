import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../Global/Avatar';

function Comment({ comment }) {
  return (
    <div className='d-flex mb-md'>
      <Link to={`/users/${comment.user.id}/profile`} className='mr-sm'>
        <Avatar src={comment.user.avatar} alt='' />
      </Link>
      <div
        style={{
          background: '#efefef',
          borderRadius: '8px',
          padding: '0.5rem'
        }}
      >
        <Link to={`/users/${comment.user.id}/profile`}>
          <h5 className='mb-sm'>
            {comment.user.firstName} {comment.user.lastName}
          </h5>
        </Link>
        <p style={{ whiteSpace: 'pre-line' }} className='mb-0'>
          {comment.comment}
        </p>
      </div>
    </div>
  );
}

export default Comment;
