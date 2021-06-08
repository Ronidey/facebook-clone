import React from 'react';

import StyledLink from '../Global/StyledLink';
import Avatar from '../Global/Avatar';
import { useRouteMatch } from 'react-router-dom';

function ChatPageItem({ user }) {
  const { url } = useRouteMatch();

  return (
    <>
      <StyledLink to={`${url}/users/${user.id}`}>
        <div className='d-flex align-center'>
          <Avatar src={user.avatar} alt={user.firstName} className='mr-md' />
          <span>
            {user.firstName} {user.lastName}
          </span>
        </div>
      </StyledLink>
    </>
  );
}

export default ChatPageItem;
