import React from "react";

const HeroSlider = ({ images, title, subtitle }) => {
  return (
    <section className="hero-slider">
      <div className="hero-slider__wrapper">
        {images.map((image, i) => (
          <div className="hero-slider__slide" key={i} style={{backgroundImage: `url(${image})`}} />
        ))}
      </div>
      <div className="hero-slider__content">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </section>
  );
};

export default HeroSlider;