import React, { useContext, useState } from 'react';
import AppContext from '../../AppContext';
import EditInfo from './EditInfo/EditInfo';
import Profile from './Profile';

function MyProfile() {
  const { appState } = useContext(AppContext);
  const [showEditInfo, setShowEditInfo] = useState(false);

  const closeEditInfo = () => {
    setShowEditInfo(false);
  };

  const openEditInfo = () => {
    setShowEditInfo(true);
  };

  return (
    <>
      <Profile
        user={appState.user}
        myAccount={true}
        openEditInfo={openEditInfo}
      />
      {showEditInfo && (
        <EditInfo user={appState.user} closeEditInfo={closeEditInfo} />
      )}
    </>
  );
}

export default MyProfile;
