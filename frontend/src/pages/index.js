import React from "react"
import Layout from "../components/layout/layout.js";
import Header from "../components/header/Header.js";
// import Programma from "../components/programma/Programma.js";
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
                {/* <h3 style={{textAlign: 'center'}}>Programma en foto's van de aankomst van Sint Nicolaas in 2019</h3> */}
                {/* <Programma/> */}
                <p style={{textAlign: 'center'}}>Op deze plaats zal <strong>zaterdag om 14.00 uur</strong> meer te zien zijn over</p>
                <h3 style={{textAlign: 'center'}}>De aankomst van Sint Nicolaas in Huizen</h3>
              </div>
            </section>

            <section className="fotos">
              <Fotos/>
            </section>

            <section className="bericht">
              <div className="grid-2x">
                <div>
                  <p style={{marginBottom: '50px'}}><strong>Onze verslaggever zoekt in Spanje Sint Nicolaas want hij wil zeker weten dat de Sint zaterdag 14 november 2020 naar Huizen komt! Hier is zijn eerste bericht</strong></p>
                  <h3>Hallo Nederland,</h3>
                  <p><em>Hier een bericht van jullie speciale verslaggever vanuit Spanje, want ik ben maar eens gaan kijken hoe het met Sinterklaas gaat want ik maak mij heel veel zorgen om hem.<br/>Jullie weten dat Sinterklaas een hele oude man is, dus hij moet erg uitkijken met het Corona virus want dat is ook in Spanje.</em></p>
                  <p><em>Ik ben nu onderweg naar Madrid, daar woont Sinterklaas en weten jullie, Madrid is de hoofdstad van Spanje en daar wonen heel veel mensen in heel veel straten, dus ik ben maar vroeg op pad gegaan want ik zal veel moeten zoeken. En omdat ik niet zoveel Spaans spreek wordt het vinden van Sinterklaas nog moeilijker.</em></p>
                  <p><em>Ik stuur weer een brief naar Nederland als ik Sinterklaas heb gevonden. Adios y hasta pronto (ik begin het al een beetje te leren, er staat: Doei en tot ziens</em></p>
                  <p><em>Jullie speciale verslaggever</em></p>
                  <p className="handtekening">Erico</p>
                  <p style={{marginBottom: '50px', marginTop: '50px'}}><strong>Hier is het tweede bericht van onze verslaggever in Spanje. Het ziet er naar uit dat hij de Sint bijna gevonden heeft! Nou, lees het zelf maar. We hopen in de volgende brief op goed nieuws!</strong></p>
                  <p></p>
                  <h3>Hola Nederland,</h3>
                  <p><em>Hier weer een bericht van jullie speciale verslaggever vanuit Spanje, en gelukkig ben ik nu in Madrid. Kanonne wat is dat een grote stad! Er wonen bijna 7 miljoen mensen, en in heel Nederland 17 miljoen. Ik heb al aan een paar mensen gevraagd of zei weten waar Sinterklaas woont. Niemand weet dat dus ik ga naar de burgemeester. Die man heet José en die weet dat vast wel. Maar eerst ga ik op zoek naar de pakhuizen van Sinterklaas om te kijken of alle cadeautjes al zijn gekocht en of ze wel zijn ingepakt.</em></p>
                  <p><em>Om de paar kilometer moet ik van de politie - die heet hier Guardia Civil - stoppen en vragen ze mij wat ik aan het doen ben. Dan leg ik uit dat ik naar Sinterklaas op zoek ben en dan mag ik gelukkig weer doorrijden. Maar ze kijken hier wel heel streng hoor, veel strenger dan thuis.</em></p>
                  <p><em>Het is geluk want weten jullie (vast niet ha ha) dat het gemeentehuis, waar de burgemeester woont, daar is ook de haven. Dan kan ik meteen kijken of de Pakjesboot al klaar ligt om uit te varen, want het wordt best wel tijd. Over twee weken moet Sinterklaas ook in Huizen komen!</em></p>
                  <p><em>Ik stuur weer een brief naar Nederland als ik Sinterklaas heb gevonden.</em></p>
                  <p><em>Adios y hasta pronto</em></p>
                  <p><em>Jullie speciale verslaggever</em></p>
                  <p className="handtekening">Erico</p>
                  <p style={{marginBottom: '50px', marginTop: '50px'}}><strong>Het derde en laatste bericht van onze verslaggever. Nu maar afwachten wanneer de Sint Nicolaas en zijn Pieten in Nederland aankomen en of ze meteen doorvaren naar Huizen.<br/>
                  Zaterdag 14 november vanaf 14.00 uur weten we het en laten dat jullie op deze website weten!</strong></p>
                  <p></p>
                  <h3>Hola Nederland,</h3>
                  <p><em>Hier is jullie speciale verslaggever weer. Ik ben bij de burgemeester op visite geweest. Een aardige man, alleen spreekt hij geen Nederlands en ik bijna geen Spaans. Ik kon nog net in het Spaans vragen of hij weet waar Sinterklaas woont, en ja dat wist hij. Ben direct weer in de auto gaan zitten en heb gezocht en gezocht, en heb hem gevonden. JIPPIE!</em></p>
                  <p><em>Ik heb Sinterklaas gesproken, maar ook hier op 1.5 meter door de Corona. Heb met hem over van alles en nog wat gesproken en natuurlijk gevraagd of hij wel voldoende cadeautjes heeft gekocht en heeft ingepakt.</em></p>
                  <p><em>Zegt Sinterklaas tegen mij dat hij dat niet allemaal weet, want zelf is hij heel druk met Het Grote Boek, dus ik moest het aan zijn Hoofdpiet vragen.</em></p>
                  <p><em>Op naar de Hoofdpiet. Nou, die wist het gelukkig wel.! Heel vrolijk verteld hij dat niet alle cadeautjes in Madrid worden gekocht, want daar is de Pakjesboot veel te klein voor. Dus zodra Sinterklaas en zijn Pieten in Nederland zijn worden er weer cadeautjes gekocht.</em></p>
                  <p><em>Wauw, dat belooft wat. En terwijl ik dit allemaal schrijf is Sinterklaas in Madrid onderweg naar de Pakjesboot want hij moet gaan varen, wil hij nog op tijd in Nederland zijn.</em></p>
                  <p><em>Ik ben best wel een beetje zenuwachtig geworden, en hoop dat ik op tijd terug ben, want dan kan ik mijn schoen gaan zetten!</em></p>
                  <p><em>Adios y hasta pronto</em></p>
                  <p><em>Jullie speciale verslaggever</em></p>
                  <p className="handtekening">Erico</p>
                </div>
                <div>
                  <div style={{textAlign: 'center', position: '-webkit-sticky',  position: 'sticky', top: '60px'}}><img src={berichtafbeelding} alt="Intocht Sinterklaas"/></div>
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
