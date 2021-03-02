import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

import styled from 'styled-components';

const StyledSponsoren = styled.div`
  display: flex; margin: auto 0; width: 100%;
  a.item {display: flex; flex: 1; width: 100%; padding: 0 5px; position: relative;}
  a.item > div {width: 100%; margin: auto 0;}
  a.item > div img {
    max-height: 80px;
    width: auto !important;
    max-width: 100%;
    margin: auto;
    right: 0;
    bottom: 0;
  }
`;

const Sponsoren = () => {
  const { sponsoren } = useStaticQuery(
    graphql`
    query sponsoren {
      sponsoren: allSanitySponsoren {
        nodes {
          logo {
            asset {
              id
              fluid {
                aspectRatio
                sizes
                base64
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
          }
          id
          bedrijfswebsite
          bedrijfsnaam
        }
      }
    }
    
    `
  )
  return (
        <StyledSponsoren>
            {sponsoren.nodes.map((item) =>
              <a key={item.id} className="item" rel="noopener noreferrer" href={item.bedrijfswebsite} target="_blank">
                <Img fluid={item.logo.asset.fluid} loading="lazy" />
              </a>
            )}
        </StyledSponsoren>
  )
}

export default Sponsoren