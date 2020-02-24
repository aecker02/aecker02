import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../components/breadcrumb";
import MaterialCard from "../components/materialCard";
import Hero from "../components/hero";

const MaterialsPage = ({ data }) => {
  const materials = data.prismic.allMaterialss.edges;
  return (
    <Layout customClass="materials-page">
      <SEO title="Materials" />
      <Hero title="Materials" bgImg={materials[0].node.material[0].image.url} />
      <Breadcrumb currentPage="materials" />
      <div className="materials-page__inner">
        {materials.map(material => (
          <MaterialCard key={material.node.title} title={material.node.title} description={material.node.description} imageUrl={material.node.material[0].image.url} />
        ))}
      </div>
    </Layout>
  );
};

export default MaterialsPage;

export const query = graphql`
  query GetAllMaterials {
    prismic {
      allMaterialss {
        edges {
          node {
            title
            description
            material {
              image
            }
          }
        }
      }
    }
  }
`;
