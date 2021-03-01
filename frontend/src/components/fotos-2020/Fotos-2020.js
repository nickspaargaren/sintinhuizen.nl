import React from 'react'; 
import { useStaticQuery, graphql } from "gatsby";
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import styles from './fotos.module.css';

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
      <div className={styles.fotos}>
        <h3 style={{textAlign: 'center'}}>Foto's van de aankomst op <strong>14 november</strong> 2020</h3>
        <p style={{textAlign: 'center', margin: '-15px 0 40px'}}>Klik op de foto voor een vergroting</p>
        <div>
        <Gallery>
          {fotos.nodes.map((item) =>
            <div key={item.id} className={styles.item}>
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
      </div>
  )
}

export default Fotos