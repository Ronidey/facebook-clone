import React, { Suspense } from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import UserIntro from './UserIntro';

import './Profile.css';
import ProfileHeaderTabs from './ProfileHeader/ProfileHeaderTabs';
import ProfilePosts from './ProfilePostsTab/ProfilePosts';

const ProfileAbout = React.lazy(() => import('./ProfileAboutTab/ProfileAbout'));
const ProfileFriends = React.lazy(() =>
  import('./ProfileFriendsTab/ProfileFriends')
);

function Profile({ user, myAccount, openEditInfo }) {
  const { url } = useRouteMatch();

  return (
    <div className='Profile'>
      <header className='Profile__header'>
        <div className='Profile__header__container'>
          <div className='Profile__cover'>
            <img
              src={require(`../../images/users/${user.coverImage}`).default}
              alt={user.name}
            />
          </div>
          <UserIntro user={user} myAccount={myAccount} />
          <hr className='mb-0' />
          <ProfileHeaderTabs />
        </div>
      </header>

      <div className='Profile__body'>
        <Switch>
          <Route exact path={`${url}`}>
            <ProfilePosts
              user={user}
              myAccount={myAccount}
              openEditInfo={openEditInfo}
            />
          </Route>
          <Suspense fallback=''>
            <Route path={`${url}/friends-tab`}>
              <ProfileFriends user={user} myAccount={myAccount} />
            </Route>
            <Route path={`${url}/about-tab`}>
              <ProfileAbout user={user} myAccount={myAccount} />
            </Route>
          </Suspense>
        </Switch>
      </div>
    </div>
  );
}

export default Profile;
