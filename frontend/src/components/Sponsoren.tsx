import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import styled from 'styled-components';

const StyledSponsoren = styled.div`
  display: flex; margin: auto 0; width: 100%;
  a.item {display: flex; flex: 1; width: 100%; padding: 0 5px; position: relative;}
  a.item > div {width: 100%; margin: auto 0; max-height: 80px;}
  a.item > div img {object-fit: contain !important;}
`;

const Sponsoren = () => {
  const { sponsoren } = useStaticQuery(
    graphql`
    query sponsoren {
      sponsoren: allSanitySponsoren {
        nodes {
          logo {
            asset {
              gatsbyImageData(height: 80)
            }
          }
          id
          bedrijfsnaam
          bedrijfswebsite
        }
      }
    }
    
    `,
  );
  return (
    <StyledSponsoren>
      {sponsoren.nodes.map((item) => (
        <a key={item.id} className="item" rel="noopener noreferrer" href={item.bedrijfswebsite} target="_blank">
          <GatsbyImage image={item.logo.asset.gatsbyImageData} alt={item.bedrijfsnaam} />
        </a>
      ))}
    </StyledSponsoren>
  );
};

export default Sponsoren;
