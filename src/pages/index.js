import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSlider from "../components/heroSlider";
import FeaturedMaterials from "../components/featured";
import Breadcrumb from "../components/breadcrumb";

const IndexPage = ({ data }) => {
  console.log(data);
  const featuredMaterials =
    data.prismic.allFeatured_materialss.edges[0].node.material;
  const sliderProps = {
    title: "Title",
    subtitle: "Subtitle",
    images: data.prismic.allLayouts.edges[0].node.slider_images.map(
      slide => slide.slider_image.url
    )
  };

  return (
    <Layout>
      <SEO title="Home" />
      <HeroSlider {...sliderProps} />
      <Breadcrumb />
      <div className="container">
        <h2>Popular materials</h2>
        <FeaturedMaterials featuredMaterials={featuredMaterials} />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    prismic {
      allLayouts {
        edges {
          node {
            slider_images {
              slider_image
            }
          }
        }
      }

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
