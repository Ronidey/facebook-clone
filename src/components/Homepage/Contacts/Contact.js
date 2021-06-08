import React, { useContext } from 'react';
import Avatar from '../../Global/Avatar';
import ClickableDiv from '../../Global/ClickableDiv';
import './Contact.css';

import AppContext from '../../../AppContext';

function Contact({ user }) {
  const { appState, appDispatch } = useContext(AppContext);

  const handleClick = () => {
    const isExist = appState.chats.find((c) => c.user.id === user.id);

    if (!isExist) {
      appDispatch({ type: 'addNewChat', payload: { user, minimize: false } });
    }
  };

  return (
    <ClickableDiv
      onClick={handleClick}
      background='#bcbcbc3d'
      aria-label='open chat'
    >
      <div className='Contact d-flex align-center'>
        <div className='Contact__img-wrapper p-relative mr-md'>
          <Avatar src={user.avatar} alt={user.firstName} size='100%' />
          <span className='active-dot'></span>
        </div>
        <span>
          {user.firstName} {user.lastName}
        </span>
      </div>
    </ClickableDiv>
  );
}

export default Contact;
