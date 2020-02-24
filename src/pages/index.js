import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSlider from "../components/heroSlider";
import Breadcrumb from "../components/breadcrumb";

const sliderProps = {
  title: "Title",
  subtitle: "Subtitle",
  images: [
    "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/100575/pexels-photo-100575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/349749/kitchen-stove-sink-kitchen-counter-349749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ]
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSlider {...sliderProps} />
    <Breadcrumb />
  </Layout>
);

export default IndexPage;
