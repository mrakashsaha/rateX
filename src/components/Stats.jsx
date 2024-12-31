import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import axiosAPI from '../axios/axiosAPI';
import Spinner from './Spinner'

const Stats = () => {
    const [totalCount, setTotalCount] = useState({})
    useEffect(() => {
        axiosAPI("/count")
            .then(res => setTotalCount(res.data))
    }, [])

    if (!totalCount?.users || !totalCount?.reviews || !totalCount?.services ) {
        totalCount.users = 0;
        totalCount.reviews = 0;
        totalCount.services = 0;
    }
    return (
        <div className='bg-[#F5F7F9] mt-28'>
            <div className='container p-2 mx-auto rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-10 py-10'>
                <div className='text-[#151515} text-center space-y-2 md:border-r'>
                    <CountUp
                        start={0}
                        end={totalCount.users}
                        duration={5}
                        suffix="+"
                        enableScrollSpy={true}
                        scrollSpyOnce={false}
                        className="text-5xl font-semibold"
                    />
                    <h4 className='text-xl font-medium'>Active Users</h4>
                </div>
                <div className='text-[#151515} text-center space-y-2 md:border-r'>
                    <CountUp
                        start={0}
                        end={totalCount.services}
                        duration={5}
                        suffix="+"
                        enableScrollSpy={true}
                        scrollSpyOnce={false}
                        className="text-5xl font-semibold"
                    />
                    <h4 className='text-xl font-medium'>Total Services</h4>
                </div>
                <div className='text-[#151515} text-center space-y-2'>
                    <CountUp
                        start={0}
                        end={totalCount.reviews}
                        duration={5}
                        suffix="+"
                        enableScrollSpy={true}
                        scrollSpyOnce={false}
                        className="text-5xl font-semibold"
                    />
                    <h4 className='text-xl font-medium'>Total Reviews</h4>
                </div>
            </div>
        </div>
    );
};

export default Stats;