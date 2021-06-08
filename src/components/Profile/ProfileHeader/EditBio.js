import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppContext from '../../../AppContext';

function EditBio(props) {
  const { appDispatch } = useContext(AppContext);
  const [newBio, setNewBio] = useState(props.bio);
  const totalBioLength = 110;

  const handleBioChange = (e) => {
    setNewBio(e.target.value);
  };

  const handleSubmitBio = () => {
    appDispatch({ type: 'updateBio', payload: newBio });
    props.closeEdit();
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <textarea
        className={classes.textField}
        value={newBio}
        onChange={handleBioChange}
        placeholder='Describe who you are'
      ></textarea>
      <div style={{ lineHeight: 2 }} className='text-right'>
        <small>{totalBioLength - newBio.length} characters remaining</small>
      </div>
      <div className='text-right'>
        <button
          className={`${classes.btn} ${classes.btnCancel}`}
          onClick={props.closeEdit}
        >
          cancel
        </button>
        <button
          className={`btn-primary ${classes.btn}`}
          disabled={props.bio === newBio}
          onClick={handleSubmitBio}
        >
          save
        </button>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    maxWidth: '340px',
    margin: '0 auto'
  },
  textField: {
    width: '100%',
    resize: 'none',
    padding: '0.5rem',
    height: '80px',
    border: '2px solid #c1c1c1',
    borderRadius: '6px',
    background: '#eee',
    outline: 'none',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: 500,
    color: '#756e6e',

    '&:hover': {
      background: '#ddd'
    }
  },

  btn: {
    border: 'none',
    padding: '0.75rem',
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '6px'
  },

  btnCancel: {
    marginRight: '0.5rem',

    '&:hover,&:focus': {
      filter: 'brightness(0.9)'
    }
  }
});

export default EditBio;
