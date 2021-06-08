import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import { GiGraduateCap } from 'react-icons/gi';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CakeIcon from '@material-ui/icons/Cake';
import './ProfileAbout.css';

function ProfileAbout({ user, myAccount }) {
  const { url } = useRouteMatch();
  const userInfo = user.personalInfo;

  return (
    <div className='ProfileAbout'>
      <div className='card'>
        <div className='ProfileAbout__content py-lg'>
          <div className='px-sm'>
            <h3 className='mb-md'>About</h3>
            <Link
              className='ProfileAbout__link is-active'
              to={url + '/about_overview'}
            >
              Overview
            </Link>
          </div>

          <div className='px-md'>
            <div className='ProfileAbout__overview'>
              <ul>
                {userInfo.working && (
                  <li className='d-flex align-center'>
                    <BusinessCenterIcon className='mr-md' />
                    <span className='fw-md'>
                      Working at{' '}
                      <span className='text-capitalize'>
                        {userInfo.working}
                      </span>
                    </span>
                  </li>
                )}
                {userInfo.study && (
                  <li className='d-flex align-center'>
                    <GiGraduateCap
                      style={{ fontSize: '1.5rem' }}
                      className='mr-md'
                    />
                    <span className='fw-md'>
                      Studied at{' '}
                      <span className='text-capitalize'>{userInfo.study}</span>
                    </span>
                  </li>
                )}
                {userInfo.lives && (
                  <li className='d-flex align-center'>
                    <LocationOnIcon className='mr-md' />
                    <span className='fw-md'>
                      From{' '}
                      <span className='text-capitalize'>{userInfo.lives}</span>
                    </span>
                  </li>
                )}
                {userInfo.relationship && (
                  <li className='d-flex align-center'>
                    <FavoriteIcon className='mr-md' />
                    <span className='fw-md text-capitalize'>
                      {userInfo.relationship}
                    </span>
                  </li>
                )}
                {userInfo.birthday && (
                  <li className='d-flex align-center'>
                    <CakeIcon className='mr-md' />
                    <span className='fw-md text-capitalize'>
                      {new Date(userInfo.birthday).toLocaleDateString(
                        undefined,
                        {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        }
                      )}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileAbout;
