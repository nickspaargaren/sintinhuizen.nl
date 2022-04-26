import 'photoswipe/style.css';

import { GatsbyImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import styled from 'styled-components';

import { Images } from '../types';

const StyledFotos = styled.div`
  margin: auto 0; width: 100%;
  ::after {clear: both; content: ""; float: none; display: block;}

   .item {
    box-shadow: 0 10px 39px -5px rgba(0,0,0,.2);
    float: left;
    line-height: 0;
    margin: 5px;
    text-align: center;
    overflow: hidden;
    width: calc(16.666% - 10px);
    box-sizing: border-box;
    background: rgba(255,255,255,.7);
    transform: rotate(-2deg);
    padding: 3px;
    cursor: pointer;
  }
  .item img {width: 100%;}

  @media screen and (max-width: 1024px) {
    .item {width: calc(25% - 10px);}
  }

  @media screen and (max-width: 768px) {
    .item {width: calc(33.333% - 10px);}
  }
`;

const Fotoalbum = ({ fotos }: { fotos: Images }): ReactElement => (
  <StyledFotos>
    <Gallery>
      {fotos.map((item) => (
        <div key={item.id} className="item">
          <Item
            original={item.publicURL}
            thumbnail={item.publicURL}
            width="1200"
            height="800"
          >
            {({ ref, open }: any) => (
              <div ref={ref} onClick={open} onKeyDown={open} role="button" tabIndex={0}>
                <GatsbyImage image={item.childImageSharp.gatsbyImageData} alt={item.relativePath} />
              </div>
            )}
          </Item>
        </div>
      ))}
    </Gallery>
  </StyledFotos>
);

export default Fotoalbum;
