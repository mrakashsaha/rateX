import React, { useLayoutEffect } from 'react';
import NavBar from './components/NavBar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer';


const Root = () => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
    }, [location.pathname]);


    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;