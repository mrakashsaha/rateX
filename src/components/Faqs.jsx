import React from 'react';
import { Helmet } from 'react-helmet';
import bg5 from "../assets/backgrounds/bg5.webp"

const Faqs = () => {
    return (
        <div>
            <Helmet>
                <title>RateX | Faqs</title>
            </Helmet>
            <div className="relative h-52 lg:h-60 bg-cover" style={{ backgroundImage: `url(${bg5})` }}>
                <div className="absolute inset-0 bg-black/10 flex flex-col justify-center p-16 text-white">
                    <div className='mx-auto container'>
                        <p className="text-sm font-light p-2">RateX / Faqs</p>
                        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
                    </div>
                </div>
            </div>
            <div className="mt-10 mb-20 md:mb-28 p-2">
                <div className='container mx-auto px-2'>
asdfasdf
                </div>
            </div>
        </div>
    );
};

export default Faqs;