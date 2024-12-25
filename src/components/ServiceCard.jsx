import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, imageURL, title, description, category, price } = service;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl hover:scale-[103%] transition-transform duration-300">
                <figure>
                    <img src={imageURL} alt={title} className="h-60 w-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-lg font-bold">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                    <p className="text-sm text-gray-500">Category: {category}</p>
                    <p className="text-lg font-semibold text-green-600">Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/serviceDetails/${_id}`} className="btn btn-primary">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;