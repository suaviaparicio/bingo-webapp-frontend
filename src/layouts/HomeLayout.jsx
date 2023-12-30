import React from "react";
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header';


const HomeLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default HomeLayout;