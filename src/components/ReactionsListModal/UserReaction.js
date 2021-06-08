import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './UserReaction.css';

import AppContext from '../../AppContext';

function UserReaction({ user, reaction }) {
  const history = useHistory();
  const { appDispatch } = useContext(AppContext);

  const handleClick = () => {
    appDispatch({ type: 'hideReactionsList' });
    history.push(`/users/${user.id}/profile`);
  };

  return (
    <div className='UserReaction d-flex align-center'>
      <div className='p-relative cursor-p' onClick={handleClick}>
        <img
          className='UserReaction__user-img'
          src={require(`../../images/users/${user.avatar}`).default}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <img
          className='UserReaction__user-reaction'
          src={require(`../../images/reactions/${reaction}.svg`).default}
          alt=''
        />
      </div>
      <div className='cursor-p ml-md' onClick={handleClick}>
        {user.firstName} {user.lastName}
      </div>
    </div>
  );
}

export default UserReaction;
