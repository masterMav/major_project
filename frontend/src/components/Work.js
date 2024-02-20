import React from "react";
import Improve from "../Assets/trophy.jpg";
import Search from "../Assets/rise.png";
import Filter from "../Assets/bell.png";

const Work = () => {
  const workInfoData = [
    {
      image: Improve,
      title: "Improve",
      text: "Explore multiple blogs to deepen your understanding and elevate your expertise in competitive programming.",
    },
    {
      image: Search,
      title: "Search",
      text: "Experience lightning-fast search results, ensuring swift access to the knowledge you seek. Change search parameters and set custom search accuracy for better results.",
    },
    {
      image: Filter,
      title: "Save time",
      text: "Save time effortlessly by filtering blogs, accessing only the most relevant information tailored to your needs.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          To achieve our vision of introducing the masses to the world of
          Competitive Programming, we are focusing on 3 vital aspects:
        </p>
      </div>

      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
