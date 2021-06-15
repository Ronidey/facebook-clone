import React, { useContext } from 'react';
import UserReaction from './UserReaction';

import AppContext from '../../AppContext';
import AddButton from '../Global/AddButton';

function ReactionsListItem({ reaction }) {
  const { appState } = useContext(AppContext);

  const isFriend = (user) => {
    if (user.id == appState.user.id) return true;

    return appState.user.friends.find((f) => {
      return f.id == user.id || f.id == appState.user.id;
    });
  };

  return (
    <div className='d-flex align-center justify-between mb-md'>
      <UserReaction user={reaction.user} reaction={reaction.reaction} />
      {!isFriend(reaction.user) && (
        <div>
          <AddButton
            otherUserId={reaction.user.id}
            className='btn btn-lg btn-light'
          />
        </div>
      )}
    </div>
  );
}

export default ReactionsListItem;
