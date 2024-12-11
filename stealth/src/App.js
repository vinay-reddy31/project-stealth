import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./components/LoginPage";
import TechniciansPage from "./components/TechniciansPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/featured/technicians" element={<TechniciansPage />} />
      </Routes>
    </Router>
  );
};

export default App;
