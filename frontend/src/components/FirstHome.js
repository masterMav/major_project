import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const FirstHome = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>

        <div className="home-text-section mt-5 pt-3">
          <h1 className="primary-heading">
            Unlocking Codeforces' knowledge bank through enhanced search.
          </h1>

          <p className="primary-text">
            One site for all blogs accessible via title, tags & authors.
          </p>

          <Link style={{ textDecoration: "none" }} to="/search">
            <button className="secondary-button">
              Start here <FiArrowRight />{" "}
            </button>
          </Link>
        </div>

        <div className="home-image-section mt-5 pt-4">
          <img src={BannerImage} alt="" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default FirstHome;
