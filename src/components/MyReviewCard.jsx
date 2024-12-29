import { Rating } from '@smastrom/react-rating';
import moment from 'moment';
import React from 'react';

const MyReviewCard = ({servicesData, reviewCardData, handleDeleteReview, openUpdateReviewModal}) => {
    const {_id, serviceId, reviewPostdate, review, rating} = reviewCardData;
    const serviceData = servicesData.find (service=>service._id === serviceId);
    return (
        <div>
            <div className="flex bg-white rounded-lg shadow-md p-6 items-end justify-between">
                <div className="flex flex-col md:gap-4">
                    {/* Service Title */}
                    <h2 className="text-xl font-bold">{serviceData?.title || 'Service Deleted!'}</h2>

                    {/* Review Text */}
                    <p className="text-gray-600">{review}</p>


                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Rating:</span>
                        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                    </div>
                    {/* Review Posted Date */}
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Review Posted:</span> {moment(reviewPostdate).format('DD-MM-YYYY, hh:mm  a')}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-4 mt-4 flex-col sm:flex-row">
                    <button onClick={()=>openUpdateReviewModal(_id)} className="btn btn-outline">Update</button>
                    <button onClick={()=>handleDeleteReview(_id)} className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;