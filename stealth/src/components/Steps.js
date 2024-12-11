import React from "react";
import "./Steps.css";

const Steps = () => {
  return (
    <div className="steps-container">
      <h2>Book a request in 3 simple steps</h2>
      <div className="steps">
        <div className="step">
          <div className="step-icon">
            <img
              src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-30089.jpg?t=st=1733898623~exp=1733902223~hmac=279df45ae9cbef81b04a34907b8fab33c006b70ffd9e36cb3051770d55b04317&w=740"
              alt="Provide Appliance Details"
            />
          </div>
          <h3>Provide your appliance details</h3>
          <p>Let us know your appliance details and your issue.</p>
        </div>
        <div className="step">
          <div className="step-icon">
            <img
              src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?t=st=1733898613~exp=1733902213~hmac=cb0de91be5902b235134d8041d3259f99a6a316d6ae7f2b0362d15325dfcce07&w=1060"
              alt="Choose Technician"
            />
          </div>
          <h3>Choose your technician</h3>
          <p>Choose from a wide variety of technicians and vendors.</p>
        </div>
        <div className="step">
          <div className="step-icon">
            <img
              src="https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg?t=st=1733898753~exp=1733902353~hmac=3b2574e16448fd166580d9e535ac5cd7b4001f429f006373574cbcb06315b161&w=740"
              alt="Get it Fixed"
            />
          </div>
          <h3>Get it fixed!</h3>
          <p>The technician will arrive at your doorstep shortly to fix it!</p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
