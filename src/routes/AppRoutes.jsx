import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Auth from '../containers/Auth';
import Home from '../pages/Home';
import WaitingRoom from '../containers/WaitingRoom';
import GameBingo from '../containers/BingoContainer';


const AppRoutes = () => (
    <Routes>    
        <Route path='/' element={<Auth />} />

        <Route path="/home" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="waiting-room" element={<WaitingRoom />} />
            <Route path="bingo-game" element={<GameBingo />} />
        </Route>
    </Routes>
);
export default AppRoutes;