module.exports = {
  siteMetadata: {
    title: `A National Leader In Addiction Recovery Treatment`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-TZPWMT'
      }
    }
  ],
  pathPrefix: `/default-path`
};
