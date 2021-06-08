import React, { useState, useContext, useRef, useEffect } from 'react';
import IconButton from '../Global/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import AppContext from '../../AppContext';
import PostUser from '../User/PostUser';

function WritePostBody({ post, setPost, imgPreview, setImgPreview, feeling }) {
  const { appState } = useContext(AppContext);
  const elTextarea = useRef(null);

  const handleChange = (e) => {
    setPost((state) => ({ ...state, text: e.target.value }));
  };

  const removeImg = () => {
    setImgPreview(null);
    setPost((state) => ({ ...state, img: '' }));
  };

  useEffect(() => {
    elTextarea.current.focus();
  }, []);

  return (
    <div className='WritePost__body'>
      <PostUser user={appState.user} feeling={feeling} />

      <textarea
        value={post.text}
        onChange={handleChange}
        placeholder="What's on your mind?"
        ref={elTextarea}
      ></textarea>

      {imgPreview && (
        <div className='preview-img-wrapper'>
          <IconButton
            onClick={removeImg}
            style={{ position: 'absolute', top: '10px', right: '10px' }}
            aria-label='remove selected image'
          >
            <CloseIcon />
          </IconButton>
          <img
            style={{
              width: '100%',
              maxHeight: '250px',
              objectFit: 'cover',
              borderRadius: '6px'
            }}
            src={imgPreview}
            alt='image preview'
          />
        </div>
      )}
    </div>
  );
}

export default WritePostBody;
