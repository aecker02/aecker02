import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../components/breadcrumb";
import { toLowerKebabCase } from "../utils/helpers";

const MaterialsPage = ({ pageContext }) => {
  const { name, category, color, image, origin_country } = pageContext;
  return (
    <Layout customClass="material-page">
      <SEO title={`${name} | ${category}`} />
      <Breadcrumb
        parentPage={toLowerKebabCase(category)}
        isMaterial={true}
        currentPage={toLowerKebabCase(name)}
      />
      <h1 className="material-page__title">{name}</h1>
      <div
        className="material-page__image"
        style={{ backgroundImage: `url(${image.url})` }}
      ></div>
      <h2>{category}</h2>
      <h2>{color}</h2>
      <h2>{origin_country}</h2>
    </Layout>
  );
};

export default MaterialsPage;
