import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AddButton from '../Global/AddButton';
import Avatar from '../Global/Avatar';
import EditBio from './ProfileHeader/EditBio';
import './UserIntro.css';

import AppContext from '../../AppContext';

function UserIntro(props) {
  const { appState, appDispatch } = useContext(AppContext);
  const [editBio, setEditBio] = useState(false);
  const { user } = props;
  const isFriend = appState.user.friends.find((f) => f.id == user.id);
  const history = useHistory();

  const handleEdit = () => {
    setEditBio(!editBio);
  };

  const handleMessageClick = () => {
    if (window.innerWidth < 768) {
      history.push(`/chat/users/${user.id}`);
      return;
    }

    const isExist = appState.chats.find((c) => c.user.id === user.id);

    if (!isExist) {
      appDispatch({ type: 'addNewChat', payload: { user, minimize: false } });
    }
  };

  return (
    <div className='UserIntro text-center'>
      <div className='UserIntro__img-wrapper'>
        <Avatar
          src={user.avatar}
          alt={user.firstName}
          size='150px'
          style={{ border: '5px solid #fff' }}
        />
      </div>
      <div className='UserIntro__text-wrapper'>
        <h2 className='text-capitalize'>
          {user.firstName} {user.lastName}
        </h2>
        {editBio ? (
          <EditBio closeEdit={handleEdit} bio={user.bio} />
        ) : (
          <div>
            <h2 className='UserIntro__name text-capitalize'>{user.name}</h2>
            <p className='UserIntro__bio'>{user.bio}</p>
            {props.myAccount ? (
              <button className='btn-link' onClick={handleEdit}>
                Edit
              </button>
            ) : isFriend ? (
              <button
                onClick={handleMessageClick}
                className='btn btn-primary btn-lg mt-md'
              >
                Message
              </button>
            ) : (
              <AddButton
                className='btn btn-primary btn-lg mt-md'
                otherUserId={user.id}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(UserIntro);
