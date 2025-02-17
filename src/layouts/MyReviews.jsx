import React, { useContext, useEffect, useState } from 'react';
import axiosAPI from '../axios/axiosAPI';
import { AuthContext } from '../context/AuthProvider';
import MyReviewCard from '../components/MyReviewCard';
import { Rating } from '@smastrom/react-rating';
import moment from 'moment';
import { Helmet } from 'react-helmet';
import useAxiosSecure from '../axios/UseAxiosSecure';
import bg4 from '../assets/backgrounds/bg4.jpg'
import Swal from 'sweetalert2';
import NoDataInSearch from '../components/NoDataInSearch'
import Spinner from '../components/Spinner';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoaing] = useState(true);
    const [reFetch, setReFetch] = useState(false);
    const [reviewsData, setReviewsData] = useState([]);
    const [servicesData, setServicesData] = useState([]);
    const [formDefaultValue, setFormDefaultValue] = useState(null);
    const [rating, setRating] = useState(0);
    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        axiosSecure.get(`/myreview?email=${user?.email}`)
            .then(res => {
                setReviewsData(res.data.myReviews);
                setServicesData(res.data.servicesInfo);
                setLoaing(false);
            })
    }, [user, reFetch])

    const handleDeleteReview = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/review/${id}`)
                    .then(res => {
                        if (res.data) {
                            setReFetch((alter) => !alter);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });


    }

    const openUpdateReviewModal = (id) => {
        document.getElementById('my_modal_5').showModal();
        axiosAPI.get(`/review/${id}`)
            .then(res => {
                setFormDefaultValue(res.data);
                setRating(res.data.rating);
            });

    }

    const handleUpdateReview = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const reviewPostdate = moment().toISOString();

        const updateReviewDoc = { review, rating, reviewPostdate }
        axiosSecure.put(`/review/${formDefaultValue._id}`, updateReviewDoc)
            .then(res => {
                if (res.data.modifiedCount) {
                    setReFetch((alter) => !alter);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Review Updated Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    document.getElementById('my_modal_5').close();
                }
            })
    }

    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div className=''>
            <Helmet>
                <title>RateX | My Reviews</title>
            </Helmet>
            <div className="relative h-52 lg:h-60 bg-cover" style={{ backgroundImage: `url(${bg4})` }}>
                <div className="absolute inset-0 bg-black/10 flex flex-col justify-center p-16 text-white dark:text-base-300">
                    <div className='mx-auto container'>
                        <p className="text-sm font-light p-2">RateX / My Reviews</p>
                        <h1 className="text-4xl font-bold">Reviews of Yours</h1>
                    </div>
                </div>
            </div>
            <div className="space-y-6 container mx-auto my-20 p-2">
                {
                    reviewsData.map((reviewCardData, idx) => <MyReviewCard openUpdateReviewModal={openUpdateReviewModal} handleDeleteReview={handleDeleteReview} servicesData={servicesData} reviewCardData={reviewCardData} key={idx}></MyReviewCard>)

                }

                {

                    reviewsData.length === 0 &&
                    <>
                        <h2 className='text-3xl text-center'>You have not posted any review yet!</h2>
                        <NoDataInSearch></NoDataInSearch>
                    </>
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
                                <button className="btn bg-[#04B2B2] hover:bg-[#038787] text-white dark:text-base-300 w-full">Update Review</button>
                            </form>

                            <div className="modal-action m-0 form-control">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="w-full btn border-[#04B2B2] bg-[#eef7f7] text-[#151515] hover:bg-[#038787] hover:text-white">Cancel</button>
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