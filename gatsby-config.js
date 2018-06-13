module.exports = {
  siteMetadata: {
    title: `A National Leader In Addiction Recovery Treatment`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    // `gatsby-plugin-postcss-sass`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-TZPWMT',
      },
    },
  ],
  pathPrefix: `/help-for-addiction`,
};
