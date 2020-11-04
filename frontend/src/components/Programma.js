import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from '../styles/programma.module.css';
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
    <table className={styles.programma} cellspacing="0">
      {tijdslots.nodes.map(item =>
        <tr key={item.id}>
          <td><FaRegClock/>{item.tijd}</td>
          <td>{item.titel}</td>
        </tr>
      )}
    </table>
  )
}

export default Programma





























