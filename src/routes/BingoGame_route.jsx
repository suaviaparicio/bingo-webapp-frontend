import React from 'react';
import { Route } from 'react-router-dom';
import BingoGame from '../components/Home';

const BingoGameRoute = () => (
  <Route path="/bingo-game" exact component={BingoGame} />
);

export default BingoGameRoute;