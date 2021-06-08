import React, { useState, useContext, useEffect } from 'react';
import AppConext from '../../../AppContext';
import users from '../../../dev-data/usersData';
import Contact from './Contact';

function Contacts() {
  const { appState } = useContext(AppConext);

  return (
    <div className='Contacts p-lg'>
      <header className='mb-sm'>
        <h3>Contacts</h3>
      </header>

      <div className='Contacts__container'>
        {appState.user.friends.map((f) => (
          <Contact key={f.id} user={f} />
        ))}
      </div>
    </div>
  );
}

export default Contacts;
