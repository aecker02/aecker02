import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../components/breadcrumb";
import MaterialCard from "../components/materialCard";

const MaterialsPage = ({ data }) => {
  const materials = data.prismic.allMaterialss.edges;
  return (
    <Layout customClass="materials-page">
      <SEO title="Materials" />
      <Breadcrumb currentPage="materials" />
      <div className="materials-page__inner">
        {materials.map(material => (
          <MaterialCard {...material.node} />
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
