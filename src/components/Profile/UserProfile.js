import React, { useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import ProfilePlaceholder from '../Placeholders/ProfilePlaceholder';
import AppContext from '../../AppContext';

const Profile = React.lazy(() => import('./Profile'));

function UserProfile() {
  const { appState } = useContext(AppContext);
  const { id } = useParams();
  const user = appState.users.find((u) => u.id == id);
  const myAccount = appState.user.id == user.id;

  if (myAccount) return <Redirect to='/my-profile' />;

  return (
    <React.Suspense fallback={<ProfilePlaceholder />}>
      <Profile user={user} myAccount={myAccount} />
    </React.Suspense>
  );
}

export default UserProfile;
