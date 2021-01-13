import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
          {tijdslots.nodes.map((item) =>
              <div key={item.id} className={styles.row}>
                <div><FaRegClock/>{item.tijd}</div>
                <div>{item.titel}</div>
              </div>
          )}
        </div>
  )
}

export default Programma