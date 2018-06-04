module.exports = {
  siteMetadata: {
    title: `A National Leader In Addiction Recovery Treatment`,
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
