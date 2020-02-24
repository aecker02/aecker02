import React from "react";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Breadcrumb from "../components/Breadcrumb";
import { toLowerKebabCase } from "../utils/helpers";

const MaterialsPage = ({ pageContext }) => {
  const { name, category, color, imageSharp, origin_country } = pageContext;
  return (
    <Layout>
      <SEO title={`${name} | ${category}`} />
      <Breadcrumb
        parentPage={toLowerKebabCase(category)}
        isMaterial={true}
        currentPage={toLowerKebabCase(name)}
      />
      <h1>{name}</h1>
      <Img fluid={imageSharp.childImageSharp.fluid} style={{ width: 300 }} />
      <h2>{category}</h2>
      <h2>{color}</h2>
      <h2>{origin_country}</h2>
    </Layout>
  );
};

export default MaterialsPage;
