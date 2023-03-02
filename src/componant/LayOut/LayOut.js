import React from 'react';
import { Outlet } from 'react-router-dom';
import SubNavber from '../Navber/SubNavber/SubNavber';

const LayOut = () => {
    return (
        <div>
            <SubNavber></SubNavber>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;