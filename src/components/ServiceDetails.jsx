import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from '../context/AuthProvider';
import { useLoaderData } from "react-router-dom";
import axiosAPI from "../axios/axiosAPI";
import moment from "moment";
import Review from "./Review";


const ServiceDetails = () => {
    let avgRatting = 0;
    const reviewPostdate = moment().toISOString();
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(0);
    const [reviewsData, setReviewsData] = useState([]);
    const [countReviews, setCountReviews] = useState(0);
    const [reFetch, setRefetch] = useState(false);
    const serviceDetails = useLoaderData();
    const { _id, imageURL, title, date, companyName, website, description, category, price } = serviceDetails;

    useEffect(() => {
        axiosAPI.get(`/reviews/${_id}`)
            .then(res => {
                setReviewsData(res.data.result);
                setCountReviews(res.data.countReviews);

            });
    }, [reFetch])

    console.log(reviewsData)

    if (reviewsData.length) {
        const totalRating = reviewsData.reduce((sum, rating) => sum + rating.rating, 0);
        const averageRating = totalRating / countReviews;
        avgRatting = averageRating;
    }




    const handleReview = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const reviewDoc = { serviceId: _id, review, rating, reviewPostdate, userEmail: user?.email, userPhoto: user?.photoURL, userName: user?.displayName };

        console.log(reviewDoc)

        axiosAPI.post("/reviews", reviewDoc)
            .then(res => {
                if (res.data.insertedId) {
                    setRefetch((alter) => !alter);
                    alert('Review Posted Sucessfully');

                }
            })
     }

    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            {/* Top Section: Service Info */}
            <div className="flex flex-col md:flex-row gap-8">
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

                    <div className="flex items-center gap-x-2">
                        <p className="text-gray-500">Ratting:</p>
                        <Rating style={{ maxWidth: 120 }} value={avgRatting} readOnly />
                    </div>
                    <p className="text-sm text-gray-500">Category: {category}</p>
                    <p className="text-sm text-gray-500">Company: {companyName}</p>
                    <p className="text-sm text-gray-500">Posted Date: {moment(date).format('DD-MM-YYYY, hh:mm  a')}</p>
                    <p className="text-xl font-semibold text-green-600">Price: ${price}</p>
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
                <h2 className="text-xl font-semibold mb-4">Total Reviews: {countReviews}</h2>
                <div className="space-y-6">
                    {
                        reviewsData.map((review, idx) => <Review key={idx} review={review}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
