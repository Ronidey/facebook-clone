import React, { useState, useContext, useEffect } from 'react';
import AddFriend from './AddFriend';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from '../../AppContext';

function AddFriendList(props) {
  const { appState } = useContext(AppContext);
  const [suggestions, setSuggestions] = useState([]);

  // Filtering out the current user
  const otherUsers = [];
  for (let user of appState.users) {
    let isFriend = false;

    for (let friend of appState.user.friends) {
      if (user.id == friend.id || user.id == appState.user.id) {
        isFriend = true;
        break;
      }
    }

    if (!isFriend) {
      otherUsers.push(user);
    }
  }

  useEffect(() => {
    setSuggestions([...otherUsers]);
  }, []);

  const removeSuggestion = (id) => {
    setSuggestions((state) => [...state].filter((u) => u.id != id));
  };

  const classes = useStyles({ maxHeight: props.maxHeight || 'initial' });

  return (
    <>
      {suggestions.length > 0 && (
        <div className={classes.root}>
          <header className='mb-md'>
            <h4 className={classes.heading}>People you may know</h4>
          </header>
          <div>
            {suggestions.map((user) => (
              <AddFriend
                handleRemove={removeSuggestion}
                mobile={props.mobile}
                key={user.id}
                user={user}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

const useStyles = makeStyles({
  root: (props) => ({
    background: 'transparent',
    width: '100%',
    height: '100%',
    maxHeight: props.maxHeight,
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'auto',
    padding: '1rem'
  }),

  heading: {
    margin: 0,
    fontSize: '1.15rem',
    fontWeight: 500,
    color: '#222'
  }
});

export default AddFriendList;
