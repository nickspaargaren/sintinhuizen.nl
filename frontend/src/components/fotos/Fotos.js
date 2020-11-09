import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import ModalImage from "react-modal-image";

import styles from './fotos.module.css';

const Fotos = () => {
  const { fotos } = useStaticQuery(
    graphql`
    query fotos {
      fotos: allFile(sort: {fields: relativePath}) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 750) {
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
      }
    }      
    `
  )

  return (
        <div className={styles.fotos}>
          {fotos.nodes.map((item) =>
            <ModalImage key={item.id} className={styles.item} small={item.childImageSharp.fluid.src} large={item.childImageSharp.fluid.src} />
          )}
        </div>
  )
}

export default Fotos