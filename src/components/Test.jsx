import React from 'react';

const Test = () => {
      const services = [
        {
          id: 1,
          image: "https://via.placeholder.com/300",
          title: "Service 1",
          description: "This is a description of Service 1.",
          category: "Category A",
          price: "$99",
        },
        {
          id: 2,
          image: "https://via.placeholder.com/300",
          title: "Service 2",
          description: "This is a description of Service 2.",
          category: "Category B",
          price: "$149",
        },
        {
          id: 3,
          image: "https://via.placeholder.com/300",
          title: "Service 3",
          description: "This is a description of Service 3.",
          category: "Category C",
          price: "$199",
        },
      ];
    
      return (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="card bg-base-100 shadow-xl hover:scale-[102%] transition-transform duration-300"
              >
                <figure>
                  <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-lg font-bold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                  <p className="text-sm text-gray-500 mt-2">Category: {service.category}</p>
                  <p className="text-xl font-semibold text-green-600 mt-4">{service.price}</p>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">See Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Test;