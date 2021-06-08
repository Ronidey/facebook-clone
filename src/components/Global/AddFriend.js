import React, { useState } from 'react';
import AddButton from './AddButton';
import StyledLink from './StyledLink';
import Avatar from './Avatar';

function AddFriend({ user }) {
  const [hovered, setIsHovered] = useState(false);

  const addIsHovered = () => {
    setIsHovered(true);
  };

  const removeIsHovered = (e) => {
    setIsHovered(false);
  };

  return (
    <StyledLink
      onMouseEnter={addIsHovered}
      onMouseLeave={removeIsHovered}
      background={!hovered && 'transparent'}
      style={{ marginBottom: '0.25rem' }}
      to={`/users/${user.id}/profile`}
    >
      <div className='d-flex align-center'>
        <Avatar src={user.avatar} alt={user.firstName} size='70px' />
        <div className='flex-1 ml-md'>
          <h5>
            {user.firstName} {user.lastName}
          </h5>
          <div className='d-flex space-between'>
            <AddButton
              onMouseEnter={removeIsHovered}
              onMouseLeave={addIsHovered}
              otherUserId={user.id}
              className='flex-1 mr-sm btn btn-primary'
            />
            <button
              onMouseEnter={removeIsHovered}
              onMouseLeave={addIsHovered}
              className='flex-1 btn btn-light'
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </StyledLink>
  );
}

export default AddFriend;
