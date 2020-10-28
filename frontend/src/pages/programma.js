import React from "react"
import Layout from "../components/layout/layout.js";

export default function Programma({data}) {
  
  return <>
          <Layout title="Programma title" description="Programma description">
            Programma
            {data.tijdslots.nodes.map(item =>
              <div key={item.id}>
                {item.tijd}
                {item.titel}
              </div>
            )}
            </Layout>
        </>
}

export const query = graphql`
query {
  tijdslots: allSanityProgramma {
      nodes {
        id
        tijd
        titel
      }
    }
} 
`;