import React from 'react';
import { Route } from 'react-router-dom';
import Authentication from '../components/Authentication';

const AuthRoute = () => (
  <Route path="/authentication" exact component={Authentication} />
);

export default AuthRoute;