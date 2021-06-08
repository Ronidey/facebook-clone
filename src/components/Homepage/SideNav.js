import React from 'react';
import ImgCircle from '../Global/ImgCircle';
import PeopleIcon from '@material-ui/icons/People';
import StyledLink from '../Global/StyledLink';

function SideNav() {
  return (
    <div className='mt-md'>
      <StyledLink to='/my-profile' background='#645f5f14'>
        <div className='d-flex align-center'>
          <ImgCircle size='35' style={{ marginRight: '0.75rem' }} />
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
