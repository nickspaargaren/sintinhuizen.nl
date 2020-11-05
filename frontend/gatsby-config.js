module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'az5d5e06',
        dataset: 'production',
        watchMode: true,
        token: process.env.GATSBY_SANITY_TOKEN,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}