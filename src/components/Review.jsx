import { Rating } from '@smastrom/react-rating';
import React from 'react';

const Review = ({review}) => {
    console.log (review)

    return (
        <div>
            <div className="flex items-start gap-4 bg-base-100 p-4 rounded-lg shadow-md">
                <img
                    src={review?.userPhoto}
                    alt="User"
                    className="rounded-full w-10 h-10"
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
                        <span className="text-xs text-gray-500">Posted on: {review?.reviewPostdate}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;