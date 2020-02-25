import React from "react";

const Hero = ({ title, subtitle, bgImg, doubleHeight }) => {
  return (
    <section
      className={`hero ${doubleHeight ? "hero--double-height" : ""}`}
      style={{
        backgroundImage: `url(${bgImg})`
      }}
    >
      <div className="hero__content-container">
        <h1 className="hero__title">{title}</h1>
        <h2 className="hero__subtitle">{subtitle}</h2>
      </div>
    </section>
  );
};

export default Hero;
