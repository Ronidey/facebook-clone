import React, { useContext, useState, useEffect } from 'react';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ReactionOptions from './ReactionOptions';
import { CSSTransition } from 'react-transition-group';
import { isMobile } from 'react-device-detect';

import AppContext, { PostContext } from '../../AppContext';
import ClickableDiv from '../Global/ClickableDiv';

function ButtonLike() {
  const { appState, appDispatch } = useContext(AppContext);
  const post = useContext(PostContext);
  const [showReacts, setShowReacts] = useState(false);
  const [showReactsCount, setShowReactsCount] = useState(0);
  let timerId;

  useEffect(() => {
    if (showReactsCount) {
      timerId = setTimeout(() => {
        setShowReacts(true);
      }, 700);

      return () => clearTimeout(timerId);
    }
  }, [showReactsCount]);

  const showReactOptions = () => {
    setShowReactsCount(showReactsCount + 1);
  };

  const hideReactOptions = () => {
    clearTimeout(timerId);
    setShowReacts(false);
  };

  let myReact, btn;
  for (let r of post.reactions) {
    if (r.user.id === appState.user.id) {
      myReact = r.reaction;
    }
  }

  if (!myReact) {
    btn = (
      <div className='d-flex align-center'>
        <ThumbUpAltOutlinedIcon />
        <span className='ml-sm fw-md'>Like</span>
      </div>
    );
  } else {
    if (myReact === 'like') {
      btn = (
        <div className='d-flex align-center' style={{ color: '#0064e0' }}>
          <ThumbUpAltIcon />
          <span className='ml-sm fw-md'>Like</span>
        </div>
      );
    } else {
      btn = (
        <div className='d-flex align-center'>
          <img
            style={{ width: '20px' }}
            src={require(`../../images/reactions/${myReact}.svg`).default}
            alt=''
          />
        </div>
      );
    }
  }

  const handleClick = (e) => {
    setShowReactsCount(0); //Don't remove this line, bug fix

    if (myReact) {
      appDispatch({
        type: 'removeReaction',
        payload: post.id
      });
    } else {
      appDispatch({
        type: 'addReaction',
        payload: { postId: post.id, reaction: 'like' }
      });
    }
  };

  const handleReactionClick = (reaction) => {
    appDispatch({
      type: 'addReaction',
      payload: { postId: post.id, reaction }
    });
  };

  return (
    <>
      {isMobile ? (
        <ClickableDiv
          aria-label='like'
          onTouchStart={showReactOptions}
          onBlur={hideReactOptions}
          onClick={handleClick}
          style={{ flex: '0 0 33.33%' }}
        >
          <div className='d-flex justify-center align-center p-relative'>
            {btn}

            <CSSTransition
              in={showReacts}
              timeout={400}
              classNames='ReactionOptions'
              unmountOnExit
            >
              <ReactionOptions
                hideReactOptions={hideReactOptions}
                handleReactionClick={handleReactionClick}
              />
            </CSSTransition>
          </div>
        </ClickableDiv>
      ) : (
        <ClickableDiv
          aria-label='like'
          onMouseEnter={showReactOptions}
          onMouseLeave={hideReactOptions}
          onClick={handleClick}
          style={{ flex: '0 0 33.33%' }}
        >
          <div className='d-flex justify-center align-center p-relative'>
            {btn}

            <CSSTransition
              in={showReacts}
              timeout={400}
              classNames='ReactionOptions'
              unmountOnExit
            >
              <ReactionOptions
                hideReactOptions={hideReactOptions}
                handleReactionClick={handleReactionClick}
              />
            </CSSTransition>
          </div>
        </ClickableDiv>
      )}
    </>
  );
}

export default ButtonLike;
