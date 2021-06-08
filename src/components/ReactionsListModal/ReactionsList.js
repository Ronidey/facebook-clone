import React, { useContext, useState, useEffect } from 'react';
import ReactionsListItem from './ReactionsListItem';

import AppContext from '../../AppContext';
import placeholder from '../../images/placeholders/reactions-list.png';

function ReactionsList() {
  const [reacts, setReacts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { appState } = useContext(AppContext);
  const postId = appState.reactionsList.postId;

  useEffect(() => {
    // Fake API request for getting the list of users who reacted
    const timer = setTimeout(() => {
      const postsData = appState.posts.find((p) => p.id === postId);
      setReacts(postsData.reactions);
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [postId]);

  return (
    <div className='p-lg' style={{ maxHeight: '350px', overflow: 'auto' }}>
      {isLoaded ? (
        reacts.map((r) => <ReactionsListItem key={r.user.id} reaction={r} />)
      ) : (
        <div>
          <img className='fade-in-out' src={placeholder} alt='' />
        </div>
      )}
    </div>
  );
}

export default ReactionsList;
