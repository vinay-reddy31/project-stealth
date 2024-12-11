import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [isTechnicianLogin, setIsTechnicianLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    businessName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInput = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(formData.email)) {
      alert("Invalid email format");
      return false;
    }
    if (!passwordRegex.test(formData.password)) {
      alert(
        "Password must be at least 8 characters long, include a special character, and a number"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    // const endpoint = isTechnicianLogin
    //   ? "/technician-login"
    //   : "/api/login/user";
    try {
      const response = await fetch("http://localhost:5000/api/login/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
      //navigate to technician page
      navigate("/featured/technicians");
    } catch (error) {
      alert("Error logging in. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <h2>{isTechnicianLogin ? "Technician Login" : "User Login"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {isTechnicianLogin && (
          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={formData.businessName}
            onChange={handleInputChange}
          />
        )}
        <button type="submit">Login</button>
      </form>
      <button
        className="toggle-btn"
        onClick={() => setIsTechnicianLogin(!isTechnicianLogin)}
      >
        {isTechnicianLogin
          ? "Switch to User Login"
          : "Switch to Technician Login"}
      </button>
    </div>
  );
};

export default LoginPage;
