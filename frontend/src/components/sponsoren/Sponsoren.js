import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import {Trail} from 'react-spring/renderprops';
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
          <Trail items={sponsoren.nodes} keys={item => item.id} from={{opacity: 0, transform: 'scale(0.5)'}} to={{opacity: 1, transform: 'scale(1)'}}>
            {item => props => 
              <a style={props} key={item.id} className={styles.item} rel="noopener noreferrer" href={item.bedrijfswebsite} target="_blank">
                <Img fluid={item.logo.asset.fluid} loading="lazy" />
              </a>
            }
          </Trail>
        </div>
  )
}

export default Sponsoren





























