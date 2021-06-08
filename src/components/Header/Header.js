import React, { useContext } from 'react';
import HeaderSearch from './HeaderSearch';
import User from '../Global/User';
import logo from '../../images/logo.svg';
import AppContext from '../../AppContext';
import { Link } from 'react-router-dom';
import './Header.css';
import HeaderNav from './HeaderNav';

function Header() {
  const { appState } = useContext(AppContext);

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
        <User user={appState.user} />
      </div>
    </header>
  );
}

export default Header;
