import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AppContext from '../AppContext';

function ProtectedRoute({ children, ...rest }) {
  const { appState } = useContext(AppContext);

  if (!appState.isLoggedIn) return <Redirect to='/login' />;

  return <Route {...rest}>{children}</Route>;
}

export default ProtectedRoute;
