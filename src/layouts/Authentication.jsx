import React from 'react';
import TopNav from '../pages/Shared/Header/TopNav';
import { Outlet } from 'react-router-dom';

const Authentication = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Authentication;