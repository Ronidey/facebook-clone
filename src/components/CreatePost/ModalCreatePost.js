import React, { useState, useContext } from 'react';
import './ModalCreatePost.css';
import WritePost from './WritePost';
import FeelingOptions from './FeelingOptions';

import AppContext from '../../AppContext';
import Modal from '../Global/Modal';

function ModalCreatePost() {
  const { appState, appDispatch } = useContext(AppContext);
  const [slide, setSlide] = useState(false);
  const [authorFeeling, setAuthorFeeling] = useState(null);

  const handleSlide = () => {
    if (appState.postToEdit) return;
    setSlide(!slide);
  };

  const handleClose = () => {
    appDispatch({ type: 'hideCreateModal' });
  };

  const handleSubmitPost = (post, imgPreview) => {
    appDispatch({
      type: 'createPost',
      payload: {
        ...post,
        reactions: [],
        comments: [],
        author: authorFeeling
          ? { ...appState.user, feeling: authorFeeling }
          : appState.user,
        img: imgPreview
      }
    });
  };

  return (
    <Modal
      className='ModalCreatePost'
      show={appState.createPostModal}
      onClose={handleClose}
      maxWidth='500px'
    >
      <div className={`ModalCreatePost__slider ${slide ? 'slide' : ''}`}>
        {/* Slide 1 */}
        <WritePost
          authorFeeling={authorFeeling}
          handleSlide={handleSlide}
          handleClose={handleClose}
          handleSubmitPost={handleSubmitPost}
        />
        {/* Slide 2 */}
        <div className='add-feeling'>
          <FeelingOptions
            handleSlide={handleSlide}
            setAuthorFeeling={setAuthorFeeling}
          />
        </div>
      </div>
    </Modal>
  );
}

export default ModalCreatePost;
