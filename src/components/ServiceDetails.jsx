import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from '../context/AuthProvider';
import { useLoaderData } from "react-router-dom";
import axiosAPI from "../axios/axiosAPI";
import moment from "moment";


const ServiceDetails = () => {
    const reviewPostdate = moment().format('DD-MM-YYYY, hh:mm  a');
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(0);
    const serviceDetails = useLoaderData();
    const { _id, imageURL, title, date, companyName, website, description, category, price } = serviceDetails;

    useEffect (()=> {
        axiosAPI.get(`/reviews/${_id}`)
        .then (res=> console.log (res.data));
    }, [])

    const handleReview = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const reviewDoc = { serviceId: _id, review, rating, reviewPostdate, userEmail: user?.email, userPhoto: user?.photoURL, userName: user?.displayName };

        console.log(reviewDoc)

        axiosAPI.post ("/reviews", reviewDoc)
        .then (res=> {
            if (res.data.insertedId) {
                alert ('Review Posted Sucessfully')
            }
        })
    }

    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            {/* Top Section: Service Info */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Product Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={imageURL}
                        alt="thumb image"
                        className="rounded-lg shadow-md w-full h-80 object-cover"
                    />
                </div>

                {/* Service Details */}
                <div className="w-full md:w-1/2 space-y-4">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="text-gray-600">
                        {description}
                    </p>
                    <p className="text-sm text-gray-500">Category: {category}</p>
                    <p className="text-sm text-gray-500">Company: {companyName}</p>
                    <p className="text-sm text-gray-500">Posted Date & Time: {date}</p>
                    <p className="text-xl font-semibold text-green-600">Price: ${price}</p>
                    <p className="text-sm text-gray-500">Total Reviews: 10</p>
                </div>
            </div>

            {/* Review Form */}
            <form onSubmit={handleReview} className="bg-base-100 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Post Your Review</h2>
                <textarea
                    name="review"
                    placeholder="Write your review..."
                    className="textarea textarea-bordered w-full mb-4"
                    required
                ></textarea>
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-gray-600">Rating:</span>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                        isRequired
                    />
                </div>
                <button className="btn btn-primary w-full">Submit Review</button>
            </form>

            {/* Previous Reviews */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Previous Reviews</h2>
                <div className="space-y-6">
                    {[1, 2, 3].map((review, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 bg-base-100 p-4 rounded-lg shadow-md"
                        >
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User"
                                className="rounded-full w-10 h-10"
                            />
                            <div>
                                <h3 className="font-semibold">User Name</h3>
                                <p className="text-sm text-gray-600">
                                    This is a sample review text. It gives feedback about the service.
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={4}
                                        readOnly
                                    />
                                    <span className="text-xs text-gray-500">Posted on: 12/22/2024</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
