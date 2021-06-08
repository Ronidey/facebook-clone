import React, { useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Profile from './Profile';

import AppContext from '../../AppContext';

function UserProfile() {
  const { appState } = useContext(AppContext);
  const { id } = useParams();
  const user = appState.users.find((u) => u.id == id);
  const myAccount = appState.user.id == user.id;

  if (myAccount) return <Redirect to='/my-profile' />;

  return <Profile user={user} myAccount={myAccount} />;
}

export default UserProfile;
