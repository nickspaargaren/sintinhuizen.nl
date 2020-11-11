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
              src
            }
            fixed(width: 270, height: 200) {
              src
            }
          }
        }
      }
    }
    `
  )

  return (
      <div className={styles.fotos}>
        <h3 style={{textAlign: 'center'}}>Foto's van de intocht op zaterdag 16 november 2019</h3>
        <div>
          {fotos.nodes.map((item) =>
            <ModalImage key={item.id} className={styles.item} small={item.childImageSharp.fixed.src} large={item.childImageSharp.fluid.src} />
          )}
        </div>
      </div>
  )
}

export default Fotos