import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import { ThemeProvider } from '../Context/ThemeContext/ThemeContext';
import Footer from '../Shared/Footer/Footer';

const RootLayouts = () => {
    return (
        <div>
            <ThemeProvider>
                <Navbar/>
            </ThemeProvider>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayouts;