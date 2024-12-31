import { Rating } from '@smastrom/react-rating';
import moment from 'moment';
import React from 'react';

const Review = ({review}) => {
    return (
        <div>
            <div className="flex items-start gap-4 bg-base-100 p-4 rounded-lg shadow-md">
                <img
                    src={review?.userPhoto}
                    alt="User"
                    className="object-cover rounded-full w-10 h-10"
                />
                <div>
                    <h3 className="font-semibold">{review?.userName}</h3>
                    <p className="text-sm text-gray-600">
                        {review?.review}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={review?.rating}
                            readOnly
                        />
                        <span className="text-xs text-gray-500">Posted on: {moment(review?.reviewPostdate).format('DD-MM-YYYY, hh:mm  a')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;