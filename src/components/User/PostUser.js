import React from 'react';
import Avatar from '../Global/Avatar';
import { Link } from 'react-router-dom';

function PostUser({ user, feeling }) {
  return (
    <div className='d-flex align-center'>
      <Link className='mr-sm lh-0' to={`/users/${user.id}/profile`}>
        <Avatar src={user.avatar} alt={user.firstName} />
      </Link>
      <div>
        <Link
          style={{ fontWeight: '600', color: '#333' }}
          to={`/users/${user.id}/profile`}
        >
          {user.firstName} {user.lastName}{' '}
          {feeling && <span className='feeling-badge'>feeling {feeling}</span>}
        </Link>
      </div>
    </div>
  );
}

export default React.memo(PostUser);
