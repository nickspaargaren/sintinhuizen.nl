import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  trailingSlash: 'never',
  graphqlTypegen: {
    generateOnBuild: true,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'az5d5e06',
        dataset: 'production',
        watchMode: true,
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
        ignore: [ '**/.*' ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Alfa Slab One',
          'Courgette',
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
  ],
};

export default config;
