import React from "react";
import "./Services.css";
import { FaTv, FaSnowflake, FaFire, FaRegLightbulb } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaRegLightbulb size={40} />,
    title: "Fridge",
    description:
      "We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.",
  },
  {
    icon: <FaSnowflake size={40} />,
    title: "Air Conditioner",
    description:
      "Don’t get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.",
  },
  {
    icon: <FaTv size={40} />,
    title: "Television",
    description:
      "What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. Or being a bright color. For standing out.",
  },
  {
    icon: <FaFire size={40} />,
    title: "Gas Stove",
    description:
      "We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h1>All Services</h1>
        <p>
          The time is now for it to be okay to be great. For being a bright
          color. For standing out.
        </p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
