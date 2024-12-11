import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TechniciansPage.css"; // Add CSS for styling

const TechniciansPage = () => {
  const [technicians, setTechnicians] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/featured-technicians")
      .then((response) => {
        setTechnicians(response.data);
      })
      .catch((error) => {
        console.error("Error fetching technicians:", error);
      });
  }, []);

  const handleBookTechnician = () => {
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000); // Auto-close modal
  };

  return (
    <div className="technicians-page">
      <h1>Available Technicians</h1>
      <div className="technician-cards">
        {technicians.map((technician) => (
          <div className="technician-card" key={technician.technician_id}>
            <img
              src={technician.photo}
              alt={technician.name}
              className="technician-photo"
            />
            <h3>{technician.name}</h3>
            <p>Specialization: {technician.specialization}</p>
            <p>Rating: {technician.rating} / 5</p>
            <p>{technician.description}</p>
            <button onClick={handleBookTechnician} className="book-button">
              Book
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Booking Successful!</h2>
            <p>You have successfully booked a technician.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechniciansPage;
