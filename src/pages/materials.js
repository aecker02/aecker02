import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = ({data}) => {
  const materials = data.prismic.allMaterialss.edges[0].node.material;
  console.log(materials)
  return (
    <Layout>
      <SEO title="Materials" />
      <h1>Materials</h1>
      {materials.map(material => {
        return (
        <>
          <h2>{material.name[0].text}</h2>
          <Img fluid={material.imageSharp.childImageSharp.fluid} />
        </>
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query granite {
    prismic {
      allMaterialss(uid: "granite") {
        edges {
          node {
            material {
              image
              name
              category
              color
              origin_country
              imageSharp {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
