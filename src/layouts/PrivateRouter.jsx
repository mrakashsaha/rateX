import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner'
import { AuthContext } from '../context/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <Spinner></Spinner>
    }

    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRouter;