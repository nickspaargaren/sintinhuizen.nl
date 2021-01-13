import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

import styles from './sponsoren.module.css';

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
        <div className={styles.sponsoren}>
            {sponsoren.nodes.map((item) =>
              <a key={item.id} className={styles.item} rel="noopener noreferrer" href={item.bedrijfswebsite} target="_blank">
                <Img fluid={item.logo.asset.fluid} loading="lazy" />
              </a>
            )}
        </div>
  )
}

export default Sponsoren