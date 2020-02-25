import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSlider from "../components/heroSlider";
import FeaturedMaterials from "../components/featured";
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

const IndexPage = ({ data }) => {
  const featuredMaterials =
    data.prismic.allFeatured_materialss.edges[0].node.material;
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSlider {...sliderProps} />
      <Breadcrumb />
      <div className="container">
        <FeaturedMaterials featuredMaterials={featuredMaterials} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    prismic {
      allFeatured_materialss {
        edges {
          node {
            material {
              featured_material_title
              material_image
              material_imageSharp {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              material_parent {
                ... on PRISMIC_Materials {
                  title
                  description
                  material {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
