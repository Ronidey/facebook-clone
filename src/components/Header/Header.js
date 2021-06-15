import React, { useContext } from 'react';
import HeaderSearch from './HeaderSearch';
import logo from '../../images/logo.svg';
import AppContext from '../../AppContext';
import { Link } from 'react-router-dom';
import './Header.css';
import HeaderNav from './HeaderNav';
import StyledLink from '../Global/StyledLink';
import Avatar from '../Global/Avatar';

function Header() {
  const { appState } = useContext(AppContext);

  if (!appState.user) return null;

  return (
    <header className='Header'>
      <div className='Header__left d-flex align-center p-sm'>
        <Link to='/' className='logo mr-md'>
          <img src={logo} alt='logo' />
        </Link>
        <HeaderSearch />
      </div>

      <div className='Header__center'>
        <HeaderNav />
      </div>

      <div className='Header__right p-sm'>
        <StyledLink
          to='/my-profile'
          style={{ borderRadius: '100vh', padding: '0.25rem 0.5rem' }}
        >
          <div className='d-flex align-center'>
            <Avatar
              src={appState.user.avatar}
              alt=''
              size='30px'
              className='mr-sm'
            />
            <div className='text-capitalize'>{appState.user.firstName}</div>
          </div>
        </StyledLink>
      </div>
    </header>
  );
}

export default Header;
