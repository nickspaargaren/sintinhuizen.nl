import { graphql, useStaticQuery } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Styledsponsors = styled.div`
  display: flex; margin: auto 0; width: 100%;
  a.item {display: flex; flex: 1; width: 100%; padding: 0 5px; position: relative;}
  a.item > div {width: 100%; margin: auto 0; max-height: 80px;}
  a.item > div img {object-fit: contain !important;}
`;

const Sponsors = (): ReactElement => {
  const { sponsors } = useStaticQuery(
    graphql`
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
    
    `,
  );
  return (
    <Styledsponsors>
      {sponsors.nodes.map((item) => (
        <OutboundLink key={item.id} className="item" rel="noopener noreferrer" href={item.url} target="_blank">
          <GatsbyImage image={item.logo.asset.gatsbyImageData} alt={item.title} />
        </OutboundLink>
      ))}
    </Styledsponsors>
  );
};

export default Sponsors;
