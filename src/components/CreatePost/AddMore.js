import React, { useRef } from 'react';
import IconButton from '../Global/IconButton';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';

function AddMore({ editMode, setPost, setImgPreview, handleSlide }) {
  const inpFile = useRef(null);

  const handleUploadImg = (e) => {
    const input = e.target;
    setPost((state) => ({ ...state, img: input.files[0] }));

    if (input.files && input.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        setImgPreview(e.target.result);
      };

      reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
  };

  const triggerInpFile = () => {
    if (editMode) return;
    inpFile.current.click();
  };

  const handleEmojiClick = () => {
    if (editMode) return;
    handleSlide();
  };

  return (
    <div className='WritePost__footer__opts d-flex justify-between align-center'>
      <span className='fw-sb'>Add to Your Post</span>

      <div>
        <IconButton
          size='small'
          background='transparent'
          color='#44cc44'
          aria-label='Upload photo'
          onClick={triggerInpFile}
        >
          <PhotoLibraryIcon size='small' />
        </IconButton>
        {/* Input type File */}
        <input
          type='file'
          accept='image/*'
          style={{ display: 'none' }}
          ref={inpFile}
          value=''
          onInput={handleUploadImg}
        />
        <IconButton
          size='small'
          background='transparent'
          color='#f9b723'
          aria-label='Add feeling'
          onClick={handleEmojiClick}
        >
          <InsertEmoticonOutlinedIcon size='small' />
        </IconButton>
      </div>
    </div>
  );
}

export default AddMore;
