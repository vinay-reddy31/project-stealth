import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Services from "../components/Services";
import Steps from "../components/Steps";
import Technicians from "../components/Technicians";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Services />
      <Steps />
      <Technicians />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
