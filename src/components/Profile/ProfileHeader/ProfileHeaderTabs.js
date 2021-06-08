import React from 'react';
import Tab from '../../Tabs/Tab';
import Tabs from '../../Tabs/Tabs';
import './ProfileHeaderTabs.css';

function ProfileHeaderTabs() {
  return (
    <div className='ProfileHeaderTabs'>
      <Tabs>
        <Tab to='/' exact={true}>
          <span>Posts</span>
        </Tab>
        <Tab to='/about'>
          <span>About</span>
        </Tab>
        <Tab to='/friends'>
          <span>Friends</span>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ProfileHeaderTabs;
