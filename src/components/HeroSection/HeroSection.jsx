import React from "react";
import "./HeroSection.css";
import HeadSet from "../../assets/vibrating-headphone 1.png";

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-text">
        <p className="hero-text">100 Thousand Songs, ad-free</p>
        <p className="hero-text">Over thousands podcast episodes</p>
      </div>
      <img className="hero-image" src={HeadSet} alt="Headset" />
    </div>
  );
};

export default HeroSection;
