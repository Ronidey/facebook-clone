import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PostUser from '../User/PostUser';

function PostHeader({ author, editPost, deletePost, menu }) {
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

      {menu && (
        <>
          <IconButton aria-label='more' aria-haspopup='true' onClick={openMenu}>
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >
            {editPost && <MenuItem onClick={handleEditClick}>Edit</MenuItem>}
            {deletePost && (
              <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
            )}
          </Menu>
        </>
      )}
    </header>
  );
}

export default PostHeader;
