import React, { useContext, useEffect, useState } from 'react';
import axiosAPI from '../axios/axiosAPI';
import { AuthContext } from '../context/AuthProvider';
import MyReviewCard from '../components/MyReviewCard';
import { Rating } from '@smastrom/react-rating';
import axios from 'axios';
import moment from 'moment';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reFetch, setReFetch] = useState(false);
    const [reviewsData, setReviewsData] = useState([]);
    const [servicesData, setServicesData] = useState([]);
    const [formDefaultValue, setFormDefaultValue] = useState(null);
    const [rating, setRating] = useState(0);
 

    useEffect(() => {
        axiosAPI.get(`/myreview?email=${user?.email}`)
            .then(res => {
                setReviewsData(res.data.myReviews);
                setServicesData(res.data.servicesInfo);
            })
    }, [user, reFetch])

    console.log(reviewsData, servicesData);

    const handleDeleteReview = (id) => {
        console.log(id)
        axiosAPI.delete(`/review/${id}`)
            .then(res => {
                if (res.data) {
                    setReFetch((alter) => !alter);
                    alert('deleted review sucess');
                }
            });
    }

    const openUpdateReviewModal = (id) => {
        console.log(id);
        document.getElementById('my_modal_5').showModal();
        axiosAPI.get (`/review/${id}`)
        .then (res=> {
            setFormDefaultValue (res.data);
            setRating(res.data.rating);
        });

    }

    const handleUpdateReview = (e) => {
        e.preventDefault();
        console.log (formDefaultValue._id);
        const review = e.target.review.value;
        const reviewPostdate = moment().format('DD-MM-YYYY, hh:mm  a');

        const updateReviewDoc = {review, rating, reviewPostdate}
        axiosAPI.put(`/review/${formDefaultValue._id}`, updateReviewDoc)
        .then (res=> {
            if (res.data.modifiedCount) {
                setReFetch((alter) => !alter);
                alert ('document updated sucess');
            }
        })
    }

    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className="text-2xl font-bold mb-6">My Reviews</h1>
            <div className="space-y-6">
                {
                    reviewsData.map((reviewCardData, idx) => <MyReviewCard openUpdateReviewModal={openUpdateReviewModal} handleDeleteReview={handleDeleteReview} servicesData={servicesData} reviewCardData={reviewCardData} key={idx}></MyReviewCard>)
                }
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div>
                        <div className="card-body bg-base-100 drop-shadow-lg mx-auto">
                            <form onSubmit={handleUpdateReview}>
                                <h2 className="text-xl font-semibold mb-4">Update Your Review</h2>
                                <textarea
                                    name="review"
                                    defaultValue={formDefaultValue?.review}
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
                                <button className="btn btn-primary w-full">Update Review</button>
                            </form>

                            <div className="modal-action m-0 form-control">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="w-full btn">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyReviews;