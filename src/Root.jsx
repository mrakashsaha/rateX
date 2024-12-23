import React, { useContext } from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider';
import Loading from './components/Loading';

const Root = () => {

    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;