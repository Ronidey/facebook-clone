import React, { useContext } from 'react';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import { Link } from 'react-router-dom';
import './CreatePost.css';

import AppContext from '../../AppContext';
import ClickableDiv from '../Global/ClickableDiv';
import Avatar from '../Global/Avatar';

function CreatePost() {
  const { appState, appDispatch } = useContext(AppContext);

  const showModal = () => {
    appDispatch({ type: 'showCreateModal' });
  };

  return (
    <div className='CreatePost card'>
      <div className='CreatePost__top d-flex align-center'>
        <Link to='/my-profile' className='lh-0 mr-sm'>
          <Avatar src={appState.user.avatar} alt={appState.user.firstName} />
        </Link>
        <div
          className='CreatePost__input cursor-p'
          tabIndex='0'
          role='button'
          onClick={showModal}
          aria-label='go to create post'
        >
          What's on your mind, Roni?
        </div>
      </div>
      <hr />
      <div className='d-flex'>
        <ClickableDiv
          onClick={showModal}
          aria-label='add photo'
          style={{
            flex: '0 0 30%',
            whiteSpace: 'nowrap',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem'
          }}
        >
          <div className='d-flex align-center justify-center'>
            <PhotoLibraryIcon
              style={{
                color: '#44cc44',
                marginRight: '0.4rem',
                fontSize: '1.75rem'
              }}
            />
            <span className='fw-sb'>Photo</span>
          </div>
        </ClickableDiv>

        <ClickableDiv
          onClick={showModal}
          aria-label='add photo'
          style={{
            flex: '0 0 30%',
            whiteSpace: 'nowrap',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem'
          }}
        >
          <div className='d-flex align-center justify-center'>
            <InsertEmoticonOutlinedIcon
              style={{
                color: '#f9b723',
                marginRight: '0.4rem',
                fontSize: '1.75rem'
              }}
            />
            <span className='fw-sb'>Feeling / Activity</span>
          </div>
        </ClickableDiv>
      </div>
    </div>
  );
}

export default CreatePost;
