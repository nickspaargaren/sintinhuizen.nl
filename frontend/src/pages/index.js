import React from "react"
import Layout from "../components/layout/layout.js";
import Header from "../components/header/Header.js";
import Programma from "../components/programma/Programma.js";
import Sponsoren from "../components/sponsoren/Sponsoren.js";

import mijter from "../assets/images/mijter.png";

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
            
            <section className="sponsoren">
              <Sponsoren/>
            </section>

            <footer>
              <p>De jaarlijkse intocht van de Sint in Huizen wordt georganiseerd door de St. Intocht Sint Nicolaas Huizen<br/>
              Bestuur: Roeland Bijlard, Hans Borremans, Laura Toele, Jurgen van Wessel. Gelieerd bestuurslid: Eric Dinkla</p>
              <p>Bankrek. NL63 RABO 0344 4312 74 | Tel. woordvoerder 0651 98 92 18 | <a href="mailto:info@sintinhuizen.nl">info@sintinhuizen.nl</a> | postadres: Slangekruid 6, 1273 VM Huizen | KvK 75336707</p>
              <p><img className="knopHome" alt="mijter" src={mijter} style={{height: '35px', width: '30px', verticalAlign: 'middle'}} /></p>
              <p style={{opacity: '0.8'}}>sintinhuizen.nl is gesponsord door <a rel="noopener noreferrer" href="https://www.cmspecialist.nl" target="_blank">CM Specialist</a></p>
            </footer>

          </Layout>
        </>
}
