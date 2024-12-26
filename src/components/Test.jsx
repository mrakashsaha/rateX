import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Test = () => {
  // Static review data for demonstration
  const reviews = [
    {
      _id: "1",
      serviceTitle: "Premium Cleaning Service",
      review: "Amazing service, highly recommend!",
      rating: 5,
      reviewPostdate: "26-12-2024, 03:03 am",
    },
    {
      _id: "2",
      serviceTitle: "Web Development",
      review: "The team did a fantastic job on my website.",
      rating: 4,
      reviewPostdate: "25-12-2024, 10:15 am",
    },
    {
      _id: "3",
      serviceTitle: "Graphic Design",
      review: "Creative designs, very satisfied.",
      rating: 5,
      reviewPostdate: "24-12-2024, 08:45 pm",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Reviews</h1>

      {/* List of Reviews */}

    </div>
  );
};

export default Test;
