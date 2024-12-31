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

    console.log(totalCount);
    if (!totalCount?.users || !totalCount?.reviews || !totalCount?.services ) {
        return <Spinner></Spinner>
    }
    return (
        <div className=' my-10'>
            <div className=' bg-[#FAF7F1] container p-2 mx-auto rounded-lg grid grid-cols-1 md:grid-cols-3 gap-10 py-10'>
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
                <div className='text-[#151515} text-center space-y-2 md:border-r'>
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