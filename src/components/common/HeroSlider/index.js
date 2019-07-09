import React from "react";
import PreviewCompatibleImage from "../Image";

import './styles.scss';

const HeroSlider = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)
    const { images, title, subheading } = this.props;
    return (
      <section className="hero-slider">
        <div className="hero-slider__wrapper">
          {images.map((image, i) => (
            <PreviewCompatibleImage key={i} imageInfo={image} isLazy={false} />
          ))}
        </div>
        <div className="hero-slider__content">
          <h1>{title}</h1>
          <h2>{subheading}</h2>
        </div>
      </section>
    );
  }
};

export default HeroSlider;
