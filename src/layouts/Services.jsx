import React, { useEffect, useState } from 'react';
import axiosAPI from '../axios/axiosAPI';
import Test from '../components/Test';
import ServiceCard from '../components/ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect (()=> {
        axiosAPI.get ("/services")
        .then (res => setServices(res.data))
        .catch (error=> console.log (error));
    }, [])

    return (
        <div className='container mx-auto px-2'>
            <h2 className='text-3xl text-center'>Services Are Here</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map((service, idx)=> <ServiceCard key={idx} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;