import React, { useState, useEffect, useRef } from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import './ChatForm.css';

function ChatForm() {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
    setIsFocused(true);
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='ChatForm d-flex p-sm'>
      <input
        ref={inputRef}
        className='ChatForm__input flex-1 mr-sm'
        type='text'
        placeholder='Aa'
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <IconButton
        style={{ color: isFocused ? 'var(--clr-primary)' : '#999' }}
        type='submit'
      >
        <SendIcon />
      </IconButton>
    </form>
  );
}

export default ChatForm;
