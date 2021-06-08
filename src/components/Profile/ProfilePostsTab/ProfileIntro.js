import React from 'react';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { GiGraduateCap } from 'react-icons/gi';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CakeIcon from '@material-ui/icons/Cake';
import './ProfileIntro.css';

function ProfileIntro({ user, myAccount, openEditInfo }) {
  const userInfo = user.personalInfo;

  return (
    <div className='ProfileIntro card'>
      <header className='ProfileIntro__header'>
        <h3>Intro</h3>
      </header>

      <ul>
        {userInfo.working && (
          <li className='d-flex align-center'>
            <BusinessCenterIcon className='ProfileIntro__icon' />
            <span className='ProfileIntro__text'>
              Working at{' '}
              <span className='text-capitalize'>{userInfo.working}</span>
            </span>
          </li>
        )}
        {userInfo.study && (
          <li className='d-flex align-center'>
            <GiGraduateCap
              className='ProfileIntro__icon'
              style={{ fontSize: '1.5rem' }}
            />
            <span className='ProfileIntro__text'>
              Studied at{' '}
              <span className='text-capitalize'>{userInfo.study}</span>
            </span>
          </li>
        )}
        {userInfo.lives && (
          <li className='d-flex align-center'>
            <LocationOnIcon className='ProfileIntro__icon' />
            <span className='ProfileIntro__text'>
              From <span className='text-capitalize'>{userInfo.lives}</span>
            </span>
          </li>
        )}
        {userInfo.relationship && (
          <li className='d-flex align-center'>
            <FavoriteIcon className='ProfileIntro__icon' />
            <span className='ProfileIntro__text text-capitalize'>
              {userInfo.relationship}
            </span>
          </li>
        )}
        {userInfo.birthday && (
          <li className='d-flex align-center'>
            <CakeIcon className='ProfileIntro__icon' />
            <span className='ProfileIntro__text text-capitalize'>
              {new Date(userInfo.birthday).toLocaleDateString(undefined, {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          </li>
        )}
      </ul>
      {myAccount && (
        <button className='btn btn-light btn-100' onClick={openEditInfo}>
          Edit Details
        </button>
      )}
    </div>
  );
}

export default ProfileIntro;
