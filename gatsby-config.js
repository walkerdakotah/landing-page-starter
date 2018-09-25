module.exports = {
  siteMetadata: {
    title: `Landing Page Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-TZPWMT'
      }
    }
  ],
  pathPrefix: `/default-path`
};
