import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Peter Breis",
      feedback:
        "Knowledgeable and easy to work with. Growth has been great, and the followers have been quality. Couldn’t be happier.",
      date: "3 days ago",
      rating: 4,
    },
    {
      name: "Sarah Lee",
      feedback:
        "Quick service and excellent communication. Very impressed with their professionalism!",
      date: "5 days ago",
      rating: 5,
    },
    {
      name: "John Smith",
      feedback:
        "Good experience overall, but there were slight delays in response time.",
      date: "1 week ago",
      rating: 3,
    },
    {
      name: "Peter Breis",
      feedback:
        "Knowledgeable and easy to work with. Growth has been great, and the followers have been quality. Couldn’t be happier.",
      date: "3 days ago",
      rating: 4,
    },
    {
      name: "Peter Breis",
      feedback:
        "Knowledgeable and easy to work with. Growth has been great, and the followers have been quality. Couldn’t be happier.",
      date: "3 days ago",
      rating: 4,
    },
    {
      name: "Peter Breis",
      feedback:
        "Knowledgeable and easy to work with. Growth has been great, and the followers have been quality. Couldn’t be happier.",
      date: "3 days ago",
      rating: 4,
    },
  ];

  return (
    <div className="testimonials-container">
      <h2>See what our happy customers have to say about us</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-header">
              <img
                src="https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-52233.jpg?t=st=1733930788~exp=1733934388~hmac=e07f2f8ca03607af2a8f6f8f4f1874058b8b2bc9c0d7f142d4bba97dcf2a2bce&w=740"
                alt={testimonial.name}
                className="testimonial-avatar"
              />
              <div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.date}</p>
              </div>
            </div>
            <p className="testimonial-feedback">{testimonial.feedback}</p>
            <p className="testimonial-rating">
              {"⭐".repeat(testimonial.rating)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
