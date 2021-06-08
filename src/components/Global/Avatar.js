import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Avatar({ src, alt, size, radius, className, ...rest }) {
  const classes = useStyles({ size, radius });
  return (
    <img
      className={`${classes.root} ${className ? className : ''}`}
      src={
        src
          ? require(`../../images/users/${src}`).default
          : require(`../../images/users/user-default.jpg`).default
      }
      alt={alt || ''}
      {...rest}
    />
  );
}

const useStyles = makeStyles({
  root: (props) => ({
    width: props.size || '40px',
    minWidth: props.size || '40px',
    height: props.size || '40px',
    borderRadius: props.radius || '50%',
    objectFit: 'cover'
  })
});

export default Avatar;
