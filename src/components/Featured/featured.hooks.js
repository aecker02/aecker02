import { useStaticQuery, graphql } from "gatsby";
import slugify from "slugify";

export const useFeaturedMaterials = () => {
  const data = useStaticQuery(graphql`
    query FeaturedMaterialsQuery {
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
  `);

  return data.prismic.allFeatured_materialss.edges[0].node.material;
};
