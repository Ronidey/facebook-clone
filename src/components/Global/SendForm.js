import React, { useState, useEffect, useRef } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function SendForm({ onSubmit }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState('');
  const classes = useStyles();

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

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      onSubmit(userInput);
      setUserInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='sendForm d-flex p-sm'>
      <input
        ref={inputRef}
        className={`${classes.textInput} flex-1 mr-sm`}
        type='text'
        value={userInput}
        onChange={handleChange}
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

const useStyles = makeStyles({
  textInput: {
    borderRadius: '100vh',
    border: 'none',
    background: '#f1f1f1',
    padding: '1rem',
    outline: 'none',
    fontSize: '1rem'
  }
});

export default SendForm;
