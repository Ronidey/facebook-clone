import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function ClickableDiv({ background, children, onClick, className, ...rest }) {
  const classes = useStyles({ background });

  return (
    <div
      onClick={onClick}
      className={`${classes.root} ${className ? className : ''}`}
      tabIndex='0'
      role='button'
      {...rest}
    >
      {children}
    </div>
  );
}

const useStyles = makeStyles({
  root: (props) => ({
    padding: '0.5rem',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 150ms ease-in-out',

    '&:hover, &:focus': {
      backgroundColor: props.background || 'var(--clr-light)',
      outline: 'none'
    }
  })
});

export default ClickableDiv;
