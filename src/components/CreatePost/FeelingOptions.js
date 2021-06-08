import React from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import IconButton from '../Global/IconButton';
import './FeelingOptions.css';
import ClickableDiv from '../Global/ClickableDiv';

function FeelingOptions(props) {
  const feelings = [
    'happy',
    'loved',
    'relaxed',
    'sad',
    'crazy',
    'excited',
    'sick'
  ];

  const handleClick = (e) => {
    props.setAuthorFeeling(e.currentTarget.dataset.feeling);
    props.handleSlide();
  };

  return (
    <div className='FeelingOptions'>
      <header className='FeelingOptions__header d-flex align-center p-relative'>
        <IconButton onClick={props.handleSlide}>
          <KeyboardBackspaceIcon />
        </IconButton>

        <h3>Create Post</h3>
      </header>
      <hr className='m-0' />
      <div className='FeelingOptons__container d-flex flex-wrap justify-between p-md'>
        {feelings.map((f) => (
          <ClickableDiv
            onClick={handleClick}
            key={f}
            data-feeling={f}
            aria-label={f}
            style={{ flex: '0 0 48%' }}
          >
            <div className='d-flex align-center'>
              <img
                className='mr-md'
                src={require(`../../images/feelings/${f}.png`).default}
              />
              <span>{f}</span>
            </div>
          </ClickableDiv>
        ))}
      </div>
    </div>
  );
}

export default FeelingOptions;
