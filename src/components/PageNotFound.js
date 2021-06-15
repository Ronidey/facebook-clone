import React from 'react';
import { Redirect } from 'react-router-dom';

function PageNotFound() {
  return <Redirect to='/not-found' />;
}

export default PageNotFound;
