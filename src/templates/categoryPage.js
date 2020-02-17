import React from "react";
import Img from 'gatsby-image'
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Breadcrumb from '../components/Breadcrumb'
import { toLowerKebabCase } from '../utils/helpers'

const CategoryPage = ({pageContext}) => {
  const { title, material } = pageContext;

  return (
    <Layout>
    <SEO title={title} />
    <Breadcrumb currentPage={toLowerKebabCase(title)} />
      <h1>{title}</h1>
      {material.map(mat => {
        return (
          <a href={`/${toLowerKebabCase(mat.category)}/${toLowerKebabCase(mat.name)}`}>
            <h2>{mat.name}</h2>
            <Img fluid={mat.imageSharp.childImageSharp.fluid} style={{width: 300}}/>
            <h3>{mat.origin_country}</h3>
          </a>
        );
      })}
  </Layout>
  );
};

export default CategoryPage;