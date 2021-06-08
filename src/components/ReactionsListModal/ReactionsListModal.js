import React, { useContext } from 'react';
import Modal from '../Global/Modal';
import IconButton from '../Global/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ReactionsList from './ReactionsList';

import AppContext from '../../AppContext';

function ReactionsListModal() {
  const { appDispatch } = useContext(AppContext);

  const handleClose = () => {
    appDispatch({ type: 'hideReactionsList' });
  };

  return (
    <Modal show={true} onClose={handleClose} maxWidth='600px'>
      <div className='ReactionsListModal'>
        <header className='d-flex align-center justify-between py-md px-lg'>
          <div>
            <h4 style={{ fontSize: '1.25rem' }}>All</h4>
          </div>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </header>
        <hr className='m-0' />
        <ReactionsList />
      </div>
    </Modal>
  );
}

export default ReactionsListModal;
