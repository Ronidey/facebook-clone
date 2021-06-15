import React from 'react';
import { makeStyles } from '@material-ui/core';

function IconButton(props) {
  const { background, color, children, onClick, ...rest } = props;
  const classes = useStyles(props);

  return (
    <button onClick={onClick} className={classes.root} {...rest}>
      <span className='icon'>{children}</span>
    </button>
  );
}

const useStyles = makeStyles({
  root: {
    margin: 0,
    lineHeight: 0,
    borderRadius: '50%',
    backgroundColor: (props) => props.background || '#efefef',
    padding: (props) =>
      props.size === 'small' ? '7px' : props.size === 'large' ? '13px' : '10px',
    color: (props) => props.color || '#787878',
    border: 'none',
    outline: 'none',
    transition: 'background 200ms ease-in-out',

    '&:hover, &:focus': {
      background: (props) =>
        props.background === 'transparent' ? '#efefef' : '#dddddd'
    }
  }
});

export default IconButton;
