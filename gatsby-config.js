require("dotenv").config();
console.log("DIRNAME", __dirname);
module.exports = {
  siteMetadata: {
    title: `Stone`,
    description: `source your stone`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Bebas Neue`
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-prismic-graphql",
      options: {
        repositoryName: "stone-compare",
        accessToken: process.env.PRISMIC_API_KEY
        //   pages: [{ // (optional, builds pages dynamically)
        //   type: 'Article',         // TypeName from prismic
        //   match: '/article/:uid',  // Pages will be generated under this pattern
        //   path: '/article',        // Placeholder page for unpublished documents
        //   component: require.resolve('./src/templates/article.js'),
        // }],
      }
    }
  ]
};
