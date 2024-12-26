import React, { useContext, useEffect, useState } from 'react';
import axiosAPI from '../axios/axiosAPI';
import { AuthContext } from '../context/AuthProvider';
import MyReviewCard from '../components/MyReviewCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reFetch, setReFetch] = useState (false);
    const [reviewsData, setReviewsData] = useState([]);
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        axiosAPI.get(`/myreview?email=${user?.email}`)
            .then(res => {
                setReviewsData(res.data.myReviews);
                setServicesData(res.data.servicesInfo);
            })
    }, [user, reFetch])

    console.log(reviewsData, servicesData);

    const handleDeleteReview = (id) => {
        console.log (id)
        axiosAPI.delete(`/review/${id}`)
        .then (res=>  {
            if (res.data) {
                setReFetch ((alter)=> !alter);
                alert ('deleted review sucess');
            }
        });
    }

    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className="text-2xl font-bold mb-6">My Reviews</h1>
            <div className="space-y-6">
                {
                    reviewsData.map ((reviewCardData, idx) => <MyReviewCard handleDeleteReview= {handleDeleteReview} servicesData= {servicesData} reviewCardData = {reviewCardData} key={idx}></MyReviewCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;