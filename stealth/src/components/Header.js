import React from "react";

import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://img.freepik.com/premium-photo/3d-construction-worker-with-adjustable-wrench_1401-2030.jpg?w=740"
          alt="Argon Logo"
        />
        <h1 className="logo-heading">Stealth</h1>
      </div>
      <div className="auth-buttons">
        <button className="btn biz-login">Register</button>
        <Link to="/login" className="btn login">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
