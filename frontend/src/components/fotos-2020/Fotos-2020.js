import React from 'react'; 
import { useStaticQuery, graphql } from "gatsby";
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import styled from 'styled-components';

const StyledFotos = styled.div`
  margin: auto 0; width: 100%;
  ::after {clear: both; content: ""; float: none; display: block;}
   .item {
    box-shadow: 0 10px 39px -5px rgba(0,0,0,.2);
    float: left;
    line-height: 0;
    margin: 5px;
    position: relative;
    text-align: center;
    overflow: hidden;
    width: calc(16.666% - 10px);
    box-sizing: border-box;
    background: rgba(255,255,255,.7);
    transform: rotate(-2deg);
    padding: 3px;
    transition: .3s all ease;
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

const Fotos = () => {
  const { fotos } = useStaticQuery(
    graphql`
    query fotos2020 {
      fotos: allFile(filter: {relativeDirectory: {eq: "fotos-2020"}}, sort: {fields: relativePath}) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 1200) {
              base64
              aspectRatio
              src
              srcSet
              sizes
            }
            fixed(width: 270, height: 200) {
              src
              srcWebp
              srcSetWebp
              srcSet
            }
          }
        }
      }
    }
    `
  )

  return (
      <StyledFotos>
        <h3 style={{textAlign: 'center'}}>Foto's van de aankomst op <strong>14 november</strong> 2020</h3>
        <p style={{textAlign: 'center', margin: '-15px 0 40px'}}>Klik op de foto voor een vergroting</p>
        <div>
        <Gallery>
          {fotos.nodes.map((item) =>
            <div key={item.id} className="item">
              <Item
                original={item.childImageSharp.fluid.src}
                thumbnail={item.childImageSharp.fluid.src}
                width="1200"
                height="800"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} onKeyDown={open} src={item.childImageSharp.fixed.src} />
                )}
              </Item>
            </div>
          )}
        </Gallery>
        </div>
      </StyledFotos>
  )
}

export default Fotos