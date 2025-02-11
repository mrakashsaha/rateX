import React, { useEffect, useState } from 'react';
import axiosAPI from '../axios/axiosAPI';
import FeaturedServiceCard from './FeaturedServiceCard';
import NoDataInSearch from '../components/NoDataInSearch'
import Spinner from './Spinner';

const FeaturedServices = () => {
    const [loading, setLoaing] = useState(true);
    const [displayFeaturedServices, setDispalyFeaturedServices] = useState([]);
    useEffect(() => {
        axiosAPI.get("/featuredServices")
            .then(res => {
                setDispalyFeaturedServices(res.data)
                setLoaing(false)
            });
    }, [])

    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className='container mx-auto'>
            <div className=' mt-20 mb-10 text-center'>
                <h2 className='text-3xl md:text-4xl font-semibold'>Featured Services</h2>
                <h5 className='text-base md:text-lg my-3'>Explore Our Exclusive Selection of Top-Notch Services</h5>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
                {
                    displayFeaturedServices.map((featuredService, idx) => <FeaturedServiceCard key={idx} featuredService={featuredService} ></FeaturedServiceCard>)
                }
            </div>
                {
                    displayFeaturedServices.length === 0 && <NoDataInSearch></NoDataInSearch>
                }
        </div>
    );
};

export default FeaturedServices;