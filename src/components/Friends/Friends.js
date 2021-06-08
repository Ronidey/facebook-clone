import React from 'react';
import AddFriendList from '../Global/AddFriendList';
import { makeStyles } from '@material-ui/core/styles';

function Friends() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.suggestionList}>
        <AddFriendList />
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    background: '#fff',
    paddingTop: '2rem',
    boxShadow: '0 0 4px rgb(0 0 0 / 25%)'
  },
  suggestionList: {
    maxWidth: '600px',
    margin: '0 auto'
  }
});

export default Friends;
