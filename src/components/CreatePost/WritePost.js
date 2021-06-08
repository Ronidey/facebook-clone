import React, { useState, useContext } from 'react';
import IconButton from '../Global/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import './WritePost.css';
import WritePostBody from './WritePostBody';
import AddMore from './AddMore';

import AppContext from '../../AppContext';

function WritePost(props) {
  const { appState, appDispatch } = useContext(AppContext);
  const editMode = Boolean(appState.postToEdit);
  let state = {};

  if (editMode) {
    state.id = appState.postToEdit.id;
    state.text = appState.postToEdit.text;
  } else {
    state.id = Date.now();
    state.text = '';
    state.img = '';
  }

  const [post, setPost] = useState(state);
  const [imgPreview, setImgPreview] = useState(null);

  const handleCloseModal = () => {
    if (editMode) return appDispatch({ type: 'cancelEditPost' });
    props.handleClose();
  };

  const handlePostClick = () => {
    props.handleSubmitPost(post, imgPreview);
  };

  const handleUpdatePost = () => {
    appDispatch({ type: 'updatePost', payload: post });
  };

  return (
    <div className='WritePost'>
      <header className='WritePost__header d-flex align-center'>
        <h3>Create Post</h3>
        <IconButton onClick={handleCloseModal}>
          <CloseIcon />
        </IconButton>
      </header>
      <hr className='m-0' />

      <WritePostBody
        post={post}
        setPost={setPost}
        imgPreview={imgPreview}
        setImgPreview={setImgPreview}
        feeling={props.authorFeeling}
      />

      <footer className='WritePost__footer'>
        <AddMore
          editMode={editMode}
          setPost={setPost}
          setImgPreview={setImgPreview}
          handleSlide={props.handleSlide}
        />
        {editMode ? (
          <button
            onClick={handleUpdatePost}
            disabled={!post.text}
            className='btn-primary btn-create-post'
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handlePostClick}
            disabled={!post.text && !post.img}
            className='btn-primary btn-create-post'
          >
            Post
          </button>
        )}
      </footer>
    </div>
  );
}

export default WritePost;
