import React, { useState, useContext } from 'react';
import Avatar from '../../Global/Avatar';
import EditBio from '../ProfileHeader/EditBio';
import './UserIntro.css';

function UserIntro(props) {
  const [editBio, setEditBio] = useState(false);
  const { user } = props;

  const handleEdit = () => {
    setEditBio(!editBio);
  };

  return (
    <div className='UserIntro text-center'>
      <div className='UserIntro__img-wrapper'>
        <Avatar
          src={user.avatar}
          alt={user.firstName}
          size='100%'
          style={{ border: '5px solid #fff' }}
        />
      </div>
      <div className='UserIntro__text-wrapper'>
        {editBio ? (
          <EditBio closeEdit={handleEdit} bio={user.bio} />
        ) : (
          <div>
            <h2 className='UserIntro__name text-capitalize'>{user.name}</h2>
            <p className='UserIntro__bio'>{user.bio}</p>
            {props.myAccount && (
              <button className='btn-link' onClick={handleEdit}>
                Edit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// const areEqual = (prevProps, nextProps) => {
//   return prevProps.name === nextProps.name && prevProps.bio === nextProps.bio;
// };

// export default React.memo(UserIntro, areEqual);

export default UserIntro;
