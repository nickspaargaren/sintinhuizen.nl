import React from "react"
import Layout from "../components/layout/layout.js";
import styles from '../styles/programma.module.css';

export default function Programma({data}) {
  
  return <>
          <Layout title="Programma title" description="Programma description">
            <h1>Programma</h1>
            <table className={styles.programma} cellspacing="0">
              {data.tijdslots.nodes.map(item =>
                <tr key={item.id}>
                  <td>{item.tijd}</td>
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