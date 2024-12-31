import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from '../context/AuthProvider';
import { useLoaderData } from "react-router-dom";
import axiosAPI from "../axios/axiosAPI";
import moment from "moment";
import Review from "./Review";
import { Helmet } from "react-helmet";
import bg1 from '../assets/backgrounds/bg1.jpg'
import Swal from "sweetalert2";


const ServiceDetails = () => {
    let avgRatting = 0;
    const [ratingReq, setRatingReq] = useState("");
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

    if (reviewsData.length) {
        const totalRating = reviewsData.reduce((sum, rating) => sum + rating.rating, 0);
        const averageRating = totalRating / countReviews;
        avgRatting = averageRating;
    }


    const handleReview = (e) => {
        e.preventDefault();
        setRatingReq("");
        const review = e.target.review.value;

        if (!rating) {
            setRatingReq("Ratting is Required!");
            return
        }

        const reviewDoc = { serviceId: _id, review, rating, reviewPostdate, userEmail: user?.email, userPhoto: user?.photoURL, userName: user?.displayName };



        axiosAPI.post("/reviews", reviewDoc)
            .then(res => {
                if (res.data.insertedId) {
                    setRefetch((alter) => !alter);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your review has been posted",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            })
    }

    return (
        <div className="">
            <Helmet>
                <title>RateX | Service Details</title>
            </Helmet>
            <div className="relative h-52 lg:h-60 bg-no-repeat object-fill" style={{ backgroundImage: `url(${bg1})` }}>
                <div className="absolute inset-0 bg-black/10 flex flex-col justify-center p-16 text-white">
                    <div className='mx-auto container'>
                        <p className="text-sm font-light p-2">RateX / Service Details</p>
                        <h1 className="text-4xl font-bold">Details About Service</h1>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 my-16 space-y-8">

                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                        <img
                            src={imageURL}
                            alt="thumb image"
                            className="rounded-lg shadow-md w-full h-80 object-cover"
                        />
                    </div>

                    {/* Service Details */}
                    <div className="w-full md:w-1/2 space-y-4 px-2">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <p className="text-gray-600">
                            {description}
                        </p>

                        <div className="flex items-center gap-x-2">
                            <p className="text-gray-500">Ratting:</p>
                            <Rating style={{ maxWidth: 120 }} value={avgRatting} readOnly />
                            <p>({countReviews})</p>
                        </div>
                        <p className="text-sm text-gray-500">Category: {category}</p>
                        <p className="text-sm text-gray-500">Company: {companyName}</p>
                        <p className="text-sm text-gray-500">Posted Date: {moment(date).format('DD-MM-YYYY, hh:mm  a')}</p>
                        <p className="text-xl font-semibold text-green-600">Price: ${price}</p>
                    </div>
                </div>


                <form onSubmit={handleReview} className="bg-base-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Post Your Review</h2>
                    <textarea
                        name="review"
                        placeholder="Write your review..."
                        className="textarea textarea-lg textarea-bordered w-full mb-4"
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
                        {ratingReq && <p className="my-2 font-semibold text-red-500">{ratingReq}</p>}
                    </div>
                    <button className="btn bg-[#04B2B2] hover:bg-[#038787] text-white w-full">Submit Review</button>
                </form>


                <div>
                    <h2 className="text-xl font-semibold mb-4">Total Reviews: {countReviews}</h2>
                    <div className="space-y-6">
                        {
                            reviewsData.map((review, idx) => <Review key={idx} review={review}></Review>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
