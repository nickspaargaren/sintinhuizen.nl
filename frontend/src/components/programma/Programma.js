import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {Trail} from 'react-spring/renderprops'

import styles from './programma.module.css';
import { FaRegClock } from 'react-icons/fa';

const Programma = () => {
  const { tijdslots } = useStaticQuery(
    graphql`
    query {
      tijdslots: allSanityProgramma(sort: {fields: tijd}) {
          nodes {
            id
            tijd
            titel
          }
        }
    } 
    `
  )
  return (
        <div className={styles.programma}>
          <Trail items={tijdslots.nodes} keys={item => item.id} from={{opacity: 0, transform: 'scale(0.5)'}} to={{opacity: 1, transform: 'scale(1)'}}>
            {item => props => 
              <div style={props} key={item.id} className={styles.row}>
                <div><FaRegClock/>{item.tijd}</div>
                <div>{item.titel}</div>
              </div>
            }
          </Trail>
        </div>
  )
}

export default Programma





























