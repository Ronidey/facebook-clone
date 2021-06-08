import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

function Tab({ to, children, fontSize, exact = false }) {
  let { url } = useRouteMatch();
  const history = useHistory();
  const classes = useStyles({ fontSize });

  const handleClick = (e) => {
    e.preventDefault();
    url = url === '/' ? '' : url;
    to = to === '/' ? '' : to;
    history.push(url + to);
  };

  let isActive;

  if (exact) {
    if (to === '/') {
      isActive = url === history.location.pathname;
    } else {
      isActive = history.location.pathname.endsWith(to);
    }
  } else {
    isActive = history.location.pathname.includes(to);
  }

  return (
    <Link
      to='#'
      className={`${classes.root} ${isActive ? 'is-active' : ''}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

const useStyles = makeStyles({
  root: (props) => {
    let fontSize;
    switch (props.fontSize) {
      case 'sm':
        fontSize = '0.75rem';
        break;
      case 'md':
        fontSize = '1rem';
        break;
      case 'lg':
        fontSize = '1.5rem';
        break;

      default:
        fontSize = '1rem';
    }

    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#aaa',
      borderRadius: '4px',
      position: 'relative',
      padding: '0 1.75rem',
      fontSize: fontSize,
      fontWeight: 600,
      height: '100%',
      transition: 'background-color 250ms ease-in-out',

      '&:hover:not(.is-active), &:focus:not(.is-active)': {
        backgroundColor: 'var(--clr-light)'
      },

      '&.is-active': {
        color: 'var(--clr-primary)'
      },

      '&.is-active::before': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        transform: 'translateY(130%)',
        backgroundColor: 'var(--clr-primary)'
      }
    };
  }
});

export default Tab;
