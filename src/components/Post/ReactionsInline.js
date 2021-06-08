import React, { useContext } from 'react';
import './ReactionsInline.css';
import AppContext, { PostContext } from '../../AppContext';

function ReactionsInline() {
  const { appDispatch } = useContext(AppContext);
  const post = useContext(PostContext);
  const reactsCount = {};

  for (let r of post.reactions) {
    if (reactsCount[r.reaction]) {
      reactsCount[r.reaction] += 1;
    } else {
      reactsCount[r.reaction] = 1;
    }
  }

  const sortedReactions = Object.entries(reactsCount)
    .sort(([, count1], [, count2]) => count2 - count1)
    .map((arr) => arr[0]);

  const handleClick = () => {
    appDispatch({ type: 'showReactionsList', payload: post.id });
  };

  return (
    <>
      {post.reactions.length > 0 && (
        <div
          aria-label='open reactions list'
          tabIndex='0'
          role='button'
          className='ReactionsInline d-flex-inline'
          onClick={handleClick}
        >
          <div className='d-flex'>
            {sortedReactions.map((r, i) => {
              if (i < 3) {
                return (
                  <img
                    key={r}
                    src={require(`../../images/reactions/${r}.svg`).default}
                  />
                );
              }
            })}
            <span className='ReactionsInline__count'>
              {post.reactions.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default ReactionsInline;
