import React, { useState } from 'react';
import { PiBuildingsDuotone, PiBuildingsFill } from 'react-icons/pi';
import { TbCategoryPlus } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, imageURL, title, description, category, price, companyName } = service;
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <div>
            <div className="card bg-base-100 shadow-xl hover:scale-[103%] transition-transform duration-300">
                <figure>
                    {isImageLoading && (
                        <div className="absolute">
                            <span className="loading loading-bars loading-lg"></span>
                        </div>
                    )}
                    <img onLoad={() => setIsImageLoading(false)} src={imageURL} alt={title} className={`h-60 w-full object-cover ${isImageLoading ? "opacity-0" : "opacity-100"}`} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg font-bold">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                    <p className="text-md font-semibold text-green-600">Price: ${price}</p>
                    <span className=" gap-1 flex items-center text-sm text-gray-500"><TbCategoryPlus className="text-xl" ></TbCategoryPlus>{category}</span>
                    <span className="gap-1 flex items-center text-sm text-gray-500"> <PiBuildingsFill className='text-xl'></PiBuildingsFill>{companyName}</span>
                    <div className="card-actions justify-end">
                        <Link to={`/serviceDetails/${_id}`} className="btn btn-primary">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;