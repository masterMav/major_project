import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>

      <div className="about-section-text-container ms-5">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Stronger problem-solving skills is the key.
        </h1>

        <p className="primary-text">
          Problem-solving skills, data structures, and algorithms are
          fundamental concepts in computer science and programming.
        </p>

        <p className="primary-text">
          Mastering these concepts can be highly beneficial for a programmer for
          efficiency, scalability and debugging.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
