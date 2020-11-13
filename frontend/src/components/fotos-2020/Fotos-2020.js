import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import ModalImage from "react-modal-image";

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
        <h3 style={{textAlign: 'center'}}>Foto's van de aankomst op <strong>14 november</strong> 2020</h3>
        <p style={{textAlign: 'center', margin: '-15px 0 40px'}}>Klik op de foto voor een vergroting</p>
        <div>
          {fotos.nodes.map((item) =>
            <ModalImage key={item.id} className={styles.item} small={item.childImageSharp.fixed.src} large={item.childImageSharp.fluid.src} />
          )}
        </div>
      </div>
  )
}

export default Fotos