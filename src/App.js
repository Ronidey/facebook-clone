import React, { useReducer, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppContext from './AppContext';
import users from './dev-data/usersData';
import posts from './dev-data/postsData';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import ModalCreatePost from './components/CreatePost/ModalCreatePost';
import Friends from './components/Friends/Friends';
import UserProfile from './components/Profile/UserProfile';
import MyProfile from './components/Profile/MyProfile';
import ChatPage from './components/Chats/ChatPage';
import Login from './components/Login/Login';
import reducer from './reducer';
import ProtectedRoute from './components/ProtectedRoute';

const Chats = React.lazy(() => import('./components/Chats/Chats'));

const ReactionsListModal = React.lazy(() =>
  import('./components/ReactionsListModal/ReactionsListModal')
);

function App() {
  const data = JSON.parse(localStorage.getItem('data'));

  const initialState = {
    createPostModal: false,
    reactionsList: {
      display: false,
      postId: null
    },
    postToEdit: null,
    user: data ? data.user : null,
    isLoggedIn: Boolean(data),
    posts,
    users,
    chats: []
  };

  const [appState, appDispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      <AppContext.Provider value={{ appState, appDispatch }}>
        <Header />
        <Switch>
          <ProtectedRoute exact path='/'>
            <Homepage />
          </ProtectedRoute>
          <ProtectedRoute path='/friends'>
            <Friends />
          </ProtectedRoute>
          <ProtectedRoute path='/chat'>
            <ChatPage />
          </ProtectedRoute>
          <ProtectedRoute path='/my-profile'>
            <MyProfile />
          </ProtectedRoute>
          <ProtectedRoute path='/users/:id/profile'>
            <UserProfile />
          </ProtectedRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route>
            <h1>404 Page Not Found!</h1>
          </Route>
        </Switch>
        {appState.createPostModal && <ModalCreatePost />}
        <Suspense fallback=''>
          {appState.reactionsList.display && <ReactionsListModal />}
        </Suspense>
        <Suspense fallback=''>
          {appState.chats.length > 0 && <Chats chats={appState.chats} />}
        </Suspense>
      </AppContext.Provider>
    </div>
  );
}

export default App;
