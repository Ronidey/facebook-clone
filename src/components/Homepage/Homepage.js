import React from 'react';
import CreatePost from '../CreatePost/CreatePost';
import './Homepage.css';
import SideNav from './SideNav';
import Posts from '../Post/Posts';
import Contacts from './Contacts/Contacts';
import AddFriendList from '../Global/AddFriendList';

function Homepage() {
  return (
    <div className='Homepage'>
      <div className='Homepage__left'>
        <SideNav />
      </div>
      <div className='Homepage__center'>
        <CreatePost />
        {/* <Feed /> */}
        <Posts />
      </div>
      <div className='Homepage__right'>
        <div className='Homepage__right__top'>
          <AddFriendList maxHeight='400px' />
        </div>
        <div className='Homepage__right__bottom'>
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
