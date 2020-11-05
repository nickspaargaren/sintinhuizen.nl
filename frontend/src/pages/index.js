import React from "react"
import Layout from "../components/layout/layout.js";
import Header from "../components/header/Header.js";
import Programma from "../components/programma/Programma.js";
import Sponsoren from "../components/sponsoren/Sponsoren.js";

export default function Home() {
  return <>
          <Layout title="Home" description="Informatie over de aankomst Sint Nicolaas in de werkhaven van het Nautisch Kwartier!">
            <section><Header/></section>
            <section>
              <div>
                <h2>Programma en foto's van de aankomst van Sint Nicolaas in 2019</h2>
                <Programma/>
              </div>
            </section>
            
            <section>
              <Sponsoren/>
            </section>

            <footer>Footer</footer>

          </Layout>
        </>
}
