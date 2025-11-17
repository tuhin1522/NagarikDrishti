import React from 'react';
import { Outlet } from 'react-router';

const RootLayouts = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default RootLayouts;