import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcrumb from "../components/breadcrumb";
import Hero from "../components/hero";
import TextCenter from "../components/textCenter";
import { RichText, Date } from "prismic-reactjs";
import { linkResolver } from "../utils/linkResolver";
import { toLowerKebabCase } from "../utils/helpers";
import MaterialCard from "../components/materialCard";

const CategoryPage = ({ pageContext }) => {
  const { title, description, material } = pageContext;

  return (
    <Layout customClass="category-page">
      <SEO title={title} />
      <Hero title={title} bgImg={material[0].image.url} />
      <Breadcrumb currentPage={toLowerKebabCase(title)} isMaterial={true} />
      <TextCenter copy={RichText.render(description, linkResolver)} />
      <div className="category-page__inner">
        {material.map(mat => {
          return (
            <MaterialCard
              key={mat.name}
              imageUrl={mat.image.url}
              title={mat.name}
              customLink={toLowerKebabCase(title)}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default CategoryPage;
