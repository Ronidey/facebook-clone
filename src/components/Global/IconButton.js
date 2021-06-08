import React from 'react';
import { makeStyles } from '@material-ui/core';

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

function IconButton(props) {
  const { background, color, children, ...rest } = props;
  const classes = useStyles(props);

  return (
    <button {...rest} className={classes.root}>
      <span className='icon'>{children}</span>
    </button>
  );
}

export default IconButton;
