import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import './ReactionOptions.css';

function ReactionOptions({ handleReactionClick, hideReactOptions }) {
  const reactions = ['like', 'love', 'laugh', 'sad', 'angry'];

  const handleClick = (e) => {
    e.stopPropagation();
    handleReactionClick(e.currentTarget.dataset.react);
    hideReactOptions();
  };

  return (
    <div className='ReactionOptions'>
      <div className='ReactionOptions__container d-flex justify-between'>
        {reactions.map((react) => (
          <Tooltip key={react} title={react.toUpperCase()} placement='top'>
            <div
              role='button'
              aria-label={react}
              data-react={react}
              tabIndex='0'
              className='ReactionOptions__btn'
              onClick={handleClick}
            >
              <img
                src={require(`../../images/reactions/${react}.svg`).default}
                alt=''
                style={{ width: '40px' }}
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default ReactionOptions;
