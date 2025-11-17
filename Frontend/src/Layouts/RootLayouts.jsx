import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import { ThemeProvider } from '../Context/ThemeContext/ThemeContext';

const RootLayouts = () => {
    return (
        <div>
            <ThemeProvider>
                <Navbar/>
            </ThemeProvider>
            <Outlet/>
        </div>
    );
};

export default RootLayouts;