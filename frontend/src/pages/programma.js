import React from "react"
import Layout from "../components/layout/layout.js";
import styles from '../styles/programma.module.css';
import { FaRegClock } from 'react-icons/fa';

export default function Programma({data}) {
  
  return <>
          <Layout title="Programma" description="Programma intocht Sinterklaas Huizen">
            <h1>Programma</h1>
            <table className={styles.programma} cellspacing="0">
              {data.tijdslots.nodes.map(item =>
                <tr key={item.id}>
                  <td><FaRegClock/>{item.tijd}</td>
                  <td>{item.titel}</td>
                </tr>
              )}
              </table>
            </Layout>
        </>
}

export const query = graphql`
query {
  tijdslots: allSanityProgramma(sort: {fields: tijd}) {
      nodes {
        id
        tijd
        titel
      }
    }
} 
`;