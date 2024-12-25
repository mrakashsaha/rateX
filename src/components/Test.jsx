import React from "react";
// import { Rating } from "react-rating";

const Test = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Service Info */}
        <div className="w-full md:w-2/3">
          <img
            src="https://via.placeholder.com/600"
            alt="Service Title"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
          <h1 className="text-2xl font-bold mt-4">Service Title</h1>
          <p className="text-gray-600 mt-2">
            This is a detailed description of the service being provided.
          </p>
          <p className="text-sm text-gray-500 mt-2">Category: Example Category</p>
          <p className="text-xl font-semibold text-green-600 mt-4">$99</p>
          <p className="text-sm text-gray-500 mt-1">Total Reviews: 10</p>
        </div>

        {/* Review Section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Add a Review</h2>
          <textarea
            placeholder="Write your review..."
            className="textarea textarea-bordered w-full mb-4"
          ></textarea>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-gray-600">Rating:</span>
            {/* <Rating className="text-yellow-500" initialRating={0} /> */}
          </div>
          <button className="btn btn-primary w-full">Add Review</button>
        </div>
      </div>

      {/* Reviews List */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Reviews</h2>
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
                  {/* <Rating className="text-yellow-500" initialRating={4} readonly /> */}
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

export default Test;
