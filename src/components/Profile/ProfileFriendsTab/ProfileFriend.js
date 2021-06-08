import React, { useState, useContext } from 'react';
import IconButton from '../../Global/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './ProfileFriend.css';
import { Link } from 'react-router-dom';
import Avatar from '../../Global/Avatar';

import AppContext from '../../../AppContext';

function ProfileFriend({ user, myAccount }) {
  const { appDispatch } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = (e) => {
    setAnchorEl(null);
  };

  const handleUnfriend = () => {
    appDispatch({ type: 'unfriend', payload: user.id });
  };

  return (
    <div className='ProfileFriend d-flex justify-between align-center p-lg'>
      <div className='d-flex align-center'>
        <Link className='lh-0 mr-md' to={`/users/${user.id}/profile`}>
          <Avatar
            src={user.avatar}
            alt={user.firstName}
            size='100px'
            radius='10px'
          />
        </Link>
        <div>
          <Link className='lh-0' to={`/users/${user.id}/profile`}>
            <h4 className='ProfileFriend__name'>
              {user.firstName} {user.lastName}
            </h4>
          </Link>
          <h5 className='ProfileFriend__bio'>
            {user.bio.length > 50 ? `${user.bio.slice(0, 50)}...` : user.bio}
          </h5>
        </div>
      </div>

      {myAccount && (
        <>
          <IconButton
            background='transparent'
            aria-label='more'
            aria-haspopup='true'
            onClick={openMenu}
          >
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            <MenuItem
              onClick={handleUnfriend}
              aria-label='unfriend'
              role='button'
            >
              Unfriend
            </MenuItem>
          </Menu>
        </>
      )}
    </div>
  );
}

export default ProfileFriend;
