import React from "react";
import "./Technicians.css";

const Technicians = () => {
  const technicians = [
    { name: "Metro Hardware", services: 22, rating: "8/10", reviews: 89 },
    { name: "Fast Fixers", services: 30, rating: "9/10", reviews: 120 },
    { name: "Quick Repair Co.", services: 18, rating: "7.5/10", reviews: 75 },
    { name: "Reliable Repairs", services: 25, rating: "8.5/10", reviews: 100 },
  ];

  return (
    <div className="technicians-container">
      <h2>Featured Technicians</h2>
      <div className="technicians-list">
        {technicians.map((technician, index) => (
          <div key={index} className="technician-card">
            <div className="technician-image">
              <img
                src="https://img.freepik.com/premium-vector/repair-services-with-technical-laptop-support-technicians-trending-concept-flat-illustration_720185-1868.jpg?w=1060"
                alt={technician.name}
              />
            </div>
            <h3>{technician.name}</h3>
            <p>{technician.services} Services</p>
            <p>Rating: {technician.rating}</p>
            <p>{technician.reviews} Reviews</p>
            <a href="#more">Show more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technicians;
