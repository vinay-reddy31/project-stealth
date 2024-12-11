import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Get in touch with us</h3>
          <div className="subscribe">
            <input type="email" placeholder="Email address" />
            <button className="subscribe-btn">→</button>
          </div>
        </div>

        <div className="footer-center">
          <p>
            Hello, we are Lift Media. Our goal is to translate the positive{" "}
            <br />
            effects from revolutionizing how companies engage with their clients
            & their team.
          </p>
          <button className="service-btn">Book a Service</button>
        </div>

        <div className="footer-right">
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Business Login</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <img
            src="https://img.freepik.com/premium-photo/3d-construction-worker-with-adjustable-wrench_1401-2030.jpg?w=740"
            alt="Argon Logo"
          />
          <h1>Stealth</h1>
        </div>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
