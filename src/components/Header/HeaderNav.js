import React from 'react';
import Tab from '../Tabs/Tab';
import Tabs from '../Tabs/Tabs';

import { FaHome, FaUserFriends, FaFacebookMessenger } from 'react-icons/fa';

function HeaderNav() {
  return (
    <nav>
      <Tabs fontSize='lg' spacing='md'>
        <Tab to='/' exact={true}>
          <FaHome />
        </Tab>
        <Tab to='/friends' exact={true}>
          <FaUserFriends />
        </Tab>
        {window.innerWidth < 768 && (
          <Tab to='/chat'>
            <FaFacebookMessenger />
          </Tab>
        )}
      </Tabs>
    </nav>
  );
}

export default HeaderNav;
