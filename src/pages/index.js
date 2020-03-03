import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSlider from "../components/heroSlider";
import FeaturedMaterials from "../components/featured";
import Breadcrumb from "../components/breadcrumb";

const IndexPage = ({ data }) => {
  const featuredMaterials =
    data.prismic.allFeatured_materialss.edges[0].node.material;

  return (
    <Layout>
      <SEO title="Home" />
      <HeroSlider {...data.prismic.allLayouts.edges[0].node} />
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
              slider_imageSharp {
                childImageSharp {
                  fluid(maxWidth: 2000, quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
            slider_subtitle
            slider_title
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
