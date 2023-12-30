// AppRoutes.jsx
import React from 'react';
import { Switch } from 'react-router-dom';
import HomeRoute from './HomeRoute';
import AuthRoute from './Auth_route';
import BingoGameRoute from './BingoGame_route';


const AppRoutes = () => (
  <Switch>
    <AuthRoute />
    <HomeRoute />
    <BingoGameRoute />
  </Switch>
);

export default AppRoutes;