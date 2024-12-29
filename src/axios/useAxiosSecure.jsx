import { useContext, useEffect } from 'react';
import axiosAPI from './axiosAPI';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const useAxiosSecure = () => {
    const {signOutUser, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=> {
        axiosAPI.interceptors.response.use(response => 
            {
                return response
            }, 
            
            error => {
                console.log ('Error caught in interceptor');
                if (error.status ===401 || error.status ===403) {
                    signOutUser()
                    .then(() => {
                        console.log('signout sucessfull');
                        setLoading(false);
                        navigate("/login")
        
                    }).catch((error) => {
                        console.log(error);
                    });
                }
                return Promise.reject(error);
            } )
    }, [])

    return axiosAPI;
};

export default useAxiosSecure;