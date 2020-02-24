const path = require(`path`);
const { toLowerKebabCase } = require("./src/utils/helpers");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const materialPageTemplate = path.resolve(`./src/templates/MaterialPage.js`);
  const categoryPageTemplate = path.resolve(`./src/templates/CategoryPage.js`);

  return graphql(
    `
      query MaterialsPages {
        prismic {
          allMaterialss {
            edges {
              node {
                title
                material {
                  category
                  color
                  image
                  name
                  origin_country
                  imageSharp {
                    childImageSharp {
                      fluid {
                        base64
                        aspectRatio
                        src
                        srcSet
                        sizes
                        originalImg
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.prismic.allMaterialss.edges.forEach(edge => {
      createPage({
        path: `materials/${toLowerKebabCase(edge.node.title)}`,
        component: categoryPageTemplate,
        context: { ...edge.node }
      });
      edge.node.material.forEach(material => {
        createPage({
          path: `materials/${toLowerKebabCase(
            material.category
          )}/${toLowerKebabCase(material.name)}`,
          component: materialPageTemplate,
          context: { ...material }
        });
      });
    });
  });
};
