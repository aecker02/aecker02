import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import HeroSlider from "../components/HeroSlider";
import FeaturedMaterials from "../components/Featured";
import Breadcrumb from "../components/Breadcrumb";

const sliderProps = {
  title: "Title",
  subtitle: "Subtitle",
  images: [
    "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/100575/pexels-photo-100575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/349749/kitchen-stove-sink-kitchen-counter-349749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ]
};

const mockFeaturedItems = [
  {
    title: "Title 1",
    description: "Im the description",
    link: "/about",
    linkText: "Sandstone"
  },
  {
    title: "Title 2",
    description: "Im the description",
    link: "/",
    linkText: "Granite"
  },
  {
    title: "Title 3",
    link: "/boo",
    linkText: "Sandpaper"
  }
];

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSlider {...sliderProps} />
    <div className="container">
      <FeaturedMaterials />
    </div>
    <Breadcrumb />
  </Layout>
);

export default IndexPage;
