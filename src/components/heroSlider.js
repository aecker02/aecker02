import React from "react";
import Image from "gatsby-image";

const HeroSlider = ({ slider_images, slider_title, slider_subtitle }) => {
  return (
    <section className="hero-slider">
      <div className="hero-slider__wrapper">
        {slider_images.map((image, i) => {
          const fluid = image.slider_imageSharp.childImageSharp.fluid;
          return <Image className="hero-slider__slide" key={i} fluid={fluid} />;
        })}
      </div>
      <div className="hero-slider__content">
        <h1>{slider_title}</h1>
        <h2>{slider_subtitle}</h2>
      </div>
    </section>
  );
};

export default HeroSlider;
