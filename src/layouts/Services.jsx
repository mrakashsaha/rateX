import React, { useEffect } from 'react';
import axiosAPI from '../axios/axiosAPI';

const Services = () => {
    useEffect (()=> {
        axiosAPI.get ("/services")
        .then (res => console.log (res.data));
    }, [])

    return (
        <div>
            Here is my services will appears
        </div>
    );
};

export default Services;