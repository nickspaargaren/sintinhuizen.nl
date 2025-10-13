import "dayjs/locale/nl";

import dayjs from "dayjs";
import type { GatsbyConfig } from "gatsby";

dayjs.locale("nl");

const siteMetadata: {
  arrivalDate: string;
} = {
  arrivalDate: dayjs(new Date("2025-11-15")).format("dddd D MMMM YYYY"),
};

const config: GatsbyConfig = {
  trailingSlash: "never",
  graphqlTypegen: {
    generateOnBuild: true,
  },
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "az5d5e06",
        dataset: "production",
        watchMode: true,
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
        ignore: ["**/.*"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content`,
      },
    },
  ],
};

export default config;
