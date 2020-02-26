import { useStaticQuery, graphql } from "gatsby";

export const usePrismicNavItems = () => {
  const data = useStaticQuery(graphql`
    query NavItemsQuery {
      prismic {
        allMaterialss {
          edges {
            node {
              material {
                category
                name
              }
            }
          }
        }
      }
    }
  `);

  const results = data.prismic.allMaterialss.edges;

  const mainCategoriesAndChildren = results.reduce((acc, currentItem) => {
    let categoryName = "";
    const children = currentItem.node.material.map(material => {
      if (!categoryName) {
        categoryName = material.category.toLowerCase();
      }

      return material.name;
    });

    return {
      ...acc,
      [categoryName]: [...children]
    };
  }, {});

  return {
    ...mainCategoriesAndChildren
  };

  /* Returns the following structure
    {
        slate: ["Honed slate", "Riven slate"],
        granite: ["Amber Fossil", "Ambrosia White", "Angola Black"],
    }
  */
};
