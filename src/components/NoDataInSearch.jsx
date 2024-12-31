import React from 'react';
import searchFaild from '../assets/lottie/searchFailed.json'
import Lottie from 'lottie-react';

const NoDataInSearch = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='max-w-xl'>
                    <Lottie animationData={searchFaild}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default NoDataInSearch;