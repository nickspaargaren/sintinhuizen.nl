import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";

const Sponsors = (): ReactElement => {
  const { sponsors } = useStaticQuery<Queries.sponsorsQuery>(graphql`
    query sponsors {
      sponsors: allSanitySponsors {
        nodes {
          logo {
            asset {
              gatsbyImageData(height: 80)
            }
          }
          id
          title
          url
        }
      }
    }
  `);

  return (
    <div className="flex items-center gap-2">
      {sponsors.nodes.map((item) => {
        if (!item.logo?.asset?.gatsbyImageData) return;

        return (
          <a
            key={item.id}
            className="item w-full"
            rel="noopener noreferrer"
            href={item.url || ""}
            target="_blank"
          >
            <GatsbyImage
              image={item.logo.asset.gatsbyImageData}
              alt={item.title || ""}
              className="w-full"
              objectFit="contain"
            />
          </a>
        );
      })}
    </div>
  );
};

export default Sponsors;
