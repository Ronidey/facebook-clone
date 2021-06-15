import React, { useContext } from 'react';
import PeopleIcon from '@material-ui/icons/People';
import StyledLink from '../Global/StyledLink';
import Avatar from '../Global/Avatar';

import AppContext from '../../AppContext';

function SideNav() {
  const { appState } = useContext(AppContext);

  return (
    <div className='mt-md'>
      <StyledLink to='/my-profile' background='#645f5f14'>
        <div className='d-flex align-center'>
          <Avatar src={appState.user.avatar} className='mr-md' size='35px' />
          <span className='text fw-md'>Roni Dey</span>
        </div>
      </StyledLink>
      <StyledLink to='/friends' background='#645f5f14'>
        <div className='d-flex align-center'>
          <span className='icon'>
            <PeopleIcon style={{ fontSize: '2rem', marginRight: '0.75rem' }} />
          </span>
          <span className='text fw-md'>Friends</span>
        </div>
      </StyledLink>
    </div>
  );
}

export default SideNav;
