import React, { useState, useContext } from 'react';
import AddButton from './AddButton';
import StyledLink from './StyledLink';
import Avatar from './Avatar';

import AppContext from '../../AppContext';

function AddFriend({ user, handleRemove }) {
  const { appState } = useContext(AppContext);
  const [hovered, setIsHovered] = useState(false);
  const [friendReqSent, setFriendReqSent] = useState(
    appState.user.fR.sent.includes(user.id)
  );

  const addIsHovered = () => {
    setIsHovered(true);
  };

  const removeIsHovered = (e) => {
    setIsHovered(false);
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleRemove(user.id);
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
          <h4 className='mb-md'>
            {user.firstName} {user.lastName}
          </h4>
          <div className='d-flex space-between'>
            <AddButton
              onMouseEnter={removeIsHovered}
              onMouseLeave={addIsHovered}
              otherUserId={user.id}
              callback={setFriendReqSent}
              className='flex-1 mr-sm btn btn-primary'
            />
            {!friendReqSent && (
              <button
                onMouseEnter={removeIsHovered}
                onMouseLeave={addIsHovered}
                onClick={handleRemoveClick}
                className='flex-1 btn btn-light'
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </StyledLink>
  );
}

export default React.memo(AddFriend);
