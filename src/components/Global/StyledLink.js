import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

function StyledLink({ background, to, children, className, ...rest }) {
  const classes = useStyles({ background });
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(to);
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`${classes.root} ${className ? className : ''}`}
      tabIndex='0'
      role='link'
      {...rest}
    >
      {children}
    </Link>
  );
}

const useStyles = makeStyles({
  root: (props) => ({
    display: 'block',
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

export default StyledLink;
