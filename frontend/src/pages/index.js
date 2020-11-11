import React from "react"
import Layout from "../components/layout/layout.js";
import Header from "../components/header/Header.js";
import Programma from "../components/programma/Programma.js";
import Fotos from "../components/fotos/Fotos.js";
import Sponsoren from "../components/sponsoren/Sponsoren.js";

import mijter from "../assets/images/mijter.png";
import berichtafbeelding from "../assets/images/sinterklaas-2020.png";

export default function Home() {
  return <>
          <Layout title="Home" description="Informatie over de aankomst Sint Nicolaas in de werkhaven van het Nautisch Kwartier!">
            <section><Header/></section>
            <section>
              <div>
                <h3>Programma en foto's van de aankomst van Sint Nicolaas in 2019</h3>
                <Programma/>
              </div>
            </section>

            <section className="fotos">
              <Fotos/>
            </section>

            <section className="bericht">
              <div className="grid-2x">
                <div>
                  <p>Zaterdag 16 november kwam ik met mijn Pieten vanuit Spanje aan in de gemeente Apeldoorn. Daar waren ook mensen van de TV aanwezig om verslag te doen. Heel Nederland kon ons zien! Heb je ook naar de TV gekeken</p>
                  <p>Nadat ik klaar was in Apeldoorn voer ik met de Pieten meteen op mijn Pakjesboot 15 naar Huizen. In Spanje had ik met de Hoofdpiet besloten niet meteen naar Huizen te komen, want het is voor mij en de Pieten een erg drukke dag. Maar ik kreeg een brief van jullie burgemeester. Hij vroeg meteen naar Huizen te komen, omdat de kinderen dat erg leuk zouden vinden. Die brief had de burgemeester jullie beloofd bij mijn aankomst vorig jaar. En als een burgemeester dat zo vriendelijk vraagt, dan ga je toch?</p>
                  <p>We komen graag naar Huizen. De ontvangst bij jullie is altijd geweldig. Wat ik ook erg leuk vind is al die boten die ons tegemoet komen en samen met ons jullie haven in varen. Dat maakt de intocht voor mij en de Pieten extra feestelijk!</p>
                  <p>Als ik in Huizen aankom, zie ik altijd dat er hard gewerkt is om mijn aankomst goed te laten verlopen. Er is bijvoorbeeld een microfoon en luidsprekers waardoor jullie mij goed kunnen verstaan. Er wordt muziek gedraaid en er zijn dansgroepen die optreden. Het is een heel feest. Dat wordt allemaal voor mij georganiseerd. Geweldig!</p>			<p>Toen ik aan wal stapte werd ik verwelkomd door jullie nieuwe burgemeester Niek Meijer en mijnheer Niels van den Boogaard, de baas van het hotel waar ik zou gaan slapen. Maar er was voor mij een speciaal moment. Ik heb afscheid genomen van twee mensen die jarenlang mijn komst naar Huizen mogelijk hebben gemaakt: Frits Groenewoud en Sigrid de Jong. Zij zijn er mee gestopt, maar ik hoorde dat er gelukkig mensen zijn die het gaan overnemen.</p>
                  <p>Jullie burgemeester Niek Meijer wil zijn best doen mij en de Pieten volgend jaar op zaterdag 14 november weer naar Huizen te laten komen.</p>
                  <p>Hartelijke groet en bedankt voor de geweldige ontvangst die jullie mij en de Pieten gegeven hebben. Tot volgend jaar!</p>
                  <p className="handtekening">Sint Nicolaas</p>
                </div>
                <div>
                  <img src={berichtafbeelding}/>
                </div>
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
            </footer>

          </Layout>
        </>
}
