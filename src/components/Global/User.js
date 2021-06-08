import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Avatar';
import './User.css';

function User({ user = {}, extra }) {
  const username = `${user.firstName} ${user.lastName}`;

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
          {username}
        </Link>
        {extra && (
          <div style={{ fontSize: '0.8rem', color: '#999' }}>{extra}</div>
        )}
      </div>
    </div>
  );
}

export default User;
