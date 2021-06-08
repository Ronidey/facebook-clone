import React, { useState, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import User from '../Global/User';

import AppContext from '../../AppContext';
import PostUser from '../User/PostUser';

function PostHeader({ author, editPost, deletePost }) {
  const { appState } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    if (window.confirm('Do you want to DELETE this post')) {
      deletePost();
    }
  };

  const handleEditClick = () => {
    closeMenu();
    editPost();
  };

  return (
    <header className='Post__header d-flex justify-between'>
      <PostUser user={author} feeling={author.feeling} />

      {appState.user.id === author.id && (
        <>
          <IconButton aria-label='more' aria-haspopup='true' onClick={openMenu}>
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
            <MenuItem onClick={handleEditClick}>Edit</MenuItem>
          </Menu>
        </>
      )}
    </header>
  );
}

export default PostHeader;
