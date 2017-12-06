module.exports = {
  siteMetadata: {
    title: `Gatsby - Help For Addiction`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-TZPWMT',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
  pathPrefix: `/help-for-addiction`,
}
