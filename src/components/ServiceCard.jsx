import React, { useState } from 'react';
import { PiBuildingsFill } from 'react-icons/pi';
import { TbCategoryPlus } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, imageURL, title, description, category, price, companyName } = service;
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <div>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure>
                    {isImageLoading && (
                        <div className="absolute">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                    )}
                    <img onLoad={() => setIsImageLoading(false)} src={imageURL} alt={title} className={`w-full h-60 object-cover ${isImageLoading ? "opacity-0" : "opacity-100"}`} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <p className="text-md font-semibold text-[#04B2B2]">Price: ${price}</p>
                        <div className='grow flex justify-around'>
                            <span className="gap-2 flex items-center text-sm text-gray-500"> <PiBuildingsFill className='text-xl'></PiBuildingsFill>{companyName}</span>
                            <span className=" gap-2 flex items-center text-sm text-gray-500"><TbCategoryPlus className="text-xl" ></TbCategoryPlus>{category}</span>
                        </div>
                    </div>
                    <h2 className="card-title text-lg font-bold">{title}</h2>
                    <p className="text-gray-600 line-clamp-2">{description}</p>
                    <div className="card-actions justify-end mt-2">
                        <Link to={`/serviceDetails/${_id}`} className="btn bg-[#04B2B2] hover:bg-[#038787] text-white dark:text-base-300 w-full">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;