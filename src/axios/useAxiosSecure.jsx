import { useContext, useEffect, useState } from 'react';
import axiosAPI from './axiosAPI';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const useAxiosSecure = () => {
    const { signOutUser, setLoading } = useContext(AuthContext);
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
                        }).catch((error) => {
                            console.log(error);
                            setLoading(false);
                        });
                }


                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Unauthorized Access Request!",
                }).then(() => {
                    navigate("/login");
                });

                return Promise.reject(error);
            })
    }, [])

    return axiosAPI;
};

export default useAxiosSecure;