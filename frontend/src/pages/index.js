import React from "react"
import Layout from "../components/layout/layout.js";
import Programma from "../components/Programma.js";

export default function Home() {
  return <>
          <Layout title="Home" description="Informatie over de aankomst Sint Nicolaas in de werkhaven van het Nautisch Kwartier!">
            Home!
            <Programma/>
          </Layout>
        </>
}
