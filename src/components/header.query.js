export const getMaterials = data => {
  const materialsQueryRes = data.prismic.allMaterialss.edges;
  return materialsQueryRes.reduce((acc, currentItem) => {
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
};
