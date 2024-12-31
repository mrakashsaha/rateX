import { useContext, useEffect, useState } from 'react';
import axiosAPI from './axiosAPI';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const useAxiosSecure = () => {
    const { signOutUser, setLoading } = useContext(AuthContext);
    let x = false;
    const navigate = useNavigate();
    useEffect(() => {
        axiosAPI.interceptors.response.use(response => {
            return response
        },

            error => {
                console.log('Error caught in interceptor');
                if (error.status === 401 || error.status === 403) {
                    signOutUser()
                        .then(() => {
                            setLoading(false);
                            x = true;

                        }).catch((error) => {
                            console.log(error);
                            setLoading(false);
                        });
                }

                if (x) {
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Unauthorized Access Request!",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {
                        navigate("/login"); // Ensure `navigate` is properly imported and defined
                        x = false;
                    });
                }
                console.log (x);
                return Promise.reject(error);
            })
    }, [])

    return axiosAPI;
};

export default useAxiosSecure;