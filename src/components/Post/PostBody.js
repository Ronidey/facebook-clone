import React from 'react';

function PostBody({ text, img }) {
  return (
    <div className='Post__body'>
      {text && <p className='Post__text'>{text}</p>}
      {img && (
        <img
          className='Post__img'
          src={
            img.startsWith('data')
              ? img
              : require(`../../images/postImages/${img}`).default
          }
          alt=''
        />
      )}
    </div>
  );
}

export default PostBody;
