import React, { useContext, useState, useEffect } from 'react';
import ReactionsListItem from './ReactionsListItem';

import AppContext from '../../AppContext';

function ReactionsList() {
  const { appState } = useContext(AppContext);
  const postId = appState.reactionsList.postId;
  const postsData = appState.posts.find((p) => p.id === postId);

  return (
    <div className='p-lg' style={{ maxHeight: '350px', overflow: 'auto' }}>
      {postsData.reactions.map((r) => (
        <ReactionsListItem key={r.user.id} reaction={r} />
      ))}
    </div>
  );
}

export default ReactionsList;
