import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import gebouwen from '../assets/images/gebouwen.svg';
import logo from '../assets/images/logo.svg';
import sinterklaas from '../assets/images/sinterklaas.svg';
import Aankomst from '../components/Aankomst';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Fotoalbum from '../components/Fotoalbum';
import Layout from '../components/Layout';
import Sponsoren from '../components/Sponsoren';
import useFotoalbum from '../hooks/useFotoalbum';

const StyledHeader = styled.div`

  background-color: #4a6091;
  background-image: url(${gebouwen});
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 825px 175px;
  max-width: 100%;
  min-height: inherit;

  .headertekst {display: flex; flex-direction: column;}
  .headertekst h2 strong {white-space: nowrap;}
  .headertekst > div {margin-bottom: 20px;}
  .headertekst > img {margin: auto auto 0 0; max-width: 300px;}

  .illustratie {display: flex; flex-direction: column;}
  .illustratie img {margin-top: auto; max-height: 80vh; width: 100%;}


  @media screen and (max-width: 768px) {
    .headertekst {flex-direction: column-reverse;}
    .headertekst > div {margin-bottom: auto;}
    .headertekst > img {margin-bottom: 20px;}

    .headertekst > div .knop {font-size: 12px;}

    .illustratie img {max-height: 300px;}
  }
`;

const Home = (): ReactElement => {
  const [ fotos2020, fotos2019 ] = useFotoalbum();

  return (
    <Layout title="Home" description="Informatie over de aankomst Sint Nicolaas in de werkhaven van het Nautisch Kwartier!">
      <section>
        <StyledHeader className="grid-2x">
          <div className="headertekst">
            <div>
              <h1>
                <strong>Aankomst</strong>
                {' '}
                <br />
                <span>Sint Nicolaas</span>
                {' '}
                <br />
                <small>in</small>
                {' '}
                <strong>Huizen</strong>
              </h1>

              <h2>
                Op
                {' '}
                <strong>zaterdag 13 november</strong>
                {' '}
                komt Sint Nicolaas met zijn Pieten aan in Huizen. Ze zullen worden verwelkomd in de haven van het
                {' '}
                <strong>Nautisch Kwartier</strong>
                . De feestelijkheden beginnen om
                {' '}
                <strong>
                  13.30 uur.
                </strong>
                {' '}
              </h2>

              <p style={{ marginBottom: '5px' }}><strong style={{ color: '#f1cb19' }}>Coronamaatregelen?</strong></p>

              <p>Wat betreft de coronamaatregelen bij de intocht heeft de overheid het volgende besloten:</p>

              <p>Georganiseerde jeugdactiviteiten, zoals een Sinterklaasintocht, zijn uitgezonderd van de plicht een coronatoegangsbewijs (CTB) te tonen. Dit geldt voor deelnemers tot en met 17 jaar en hun begeleiders.</p>

              <p>We zijn blij weer een leuk feest voor de kinderen te kunnen organiseren. En met ieders medewerking gaat dat zeker lukken!</p>

              <p>Bestuur Stichting Intocht Sint Nicolaas Huizen</p>

            </div>
            <img src={logo} alt="Logo" style={{ width: '300px', height: '195px' }} loading="lazy" />
          </div>
          <div className="illustratie">
            <div style={{ textAlign: 'right' }}><Button title="Verkeer en parkeren" url="/verkeer-en-parkeren" /></div>
            <img src={sinterklaas} alt="Sinterklaas" width="415px" height="440px" loading="lazy" />
          </div>
        </StyledHeader>
      </section>
      <section><Aankomst /></section>

      <section className="fotos">
        <div>
          <h3 style={{ textAlign: 'center' }}>
            Foto&apos;s van de aankomst op
            {' '}
            <strong>14 november</strong>
            {' '}
            2020
          </h3>
          <p style={{ textAlign: 'center', margin: '-15px 0 40px' }}>Klik op de foto voor een vergroting</p>
          <Fotoalbum fotos={fotos2020} />
        </div>
      </section>
      <section className="fotos">
        <div>
          <h3 style={{ textAlign: 'center' }}>
            Foto&apos;s van de intocht
            {' '}
            <strong>2019</strong>
          </h3>
          <p style={{ textAlign: 'center', margin: '-15px 0 40px' }}>Klik op de foto voor een vergroting</p>
          <Fotoalbum fotos={fotos2019} />
        </div>
      </section>

      <section className="bericht">
        <div className="grid-2x">
          <div>
            <p style={{ marginBottom: '50px' }}><strong>Onze verslaggever zoekt in Spanje Sint Nicolaas want hij wil zeker weten dat de Sint zaterdag 13 november 2021 naar Huizen komt! Hier is zijn eerste bericht</strong></p>
            <h3>Hallo Nederland,</h3>
            <p>
              <em>
                Hier een bericht van jullie speciale verslaggever vanuit Spanje, want ik ben maar eens gaan kijken hoe het met Sinterklaas gaat want ik maak mij heel veel zorgen om hem.
                <br />
                Jullie weten dat Sinterklaas een hele oude man is, dus hij moet erg uitkijken met het Corona virus want dat is ook in Spanje.
              </em>
            </p>
            <p><em>Ik ben nu onderweg naar Madrid, daar woont Sinterklaas en weten jullie, Madrid is de hoofdstad van Spanje en daar wonen heel veel mensen in heel veel straten, dus ik ben maar vroeg op pad gegaan want ik zal veel moeten zoeken. En omdat ik niet zoveel Spaans spreek wordt het vinden van Sinterklaas nog moeilijker.</em></p>
            <p><em>Ik stuur weer een brief naar Nederland als ik Sinterklaas heb gevonden. Adios y hasta pronto (ik begin het al een beetje te leren, er staat: Doei en tot ziens</em></p>
            <p><em>Jullie speciale verslaggever</em></p>
            <p className="handtekening">Erico</p>
            <p style={{ marginBottom: '50px', marginTop: '50px' }}><strong>Hier is het tweede bericht van onze verslaggever in Spanje. Het ziet er naar uit dat hij de Sint bijna gevonden heeft! Nou, lees het zelf maar. We hopen in de volgende brief op goed nieuws!</strong></p>
            <p />
            <h3>Hola Nederland,</h3>
            <p><em>Hier weer een bericht van jullie speciale verslaggever vanuit Spanje, en gelukkig ben ik nu in Madrid. Kanonne wat is dat een grote stad! Er wonen bijna 7 miljoen mensen, en in heel Nederland 17 miljoen. Ik heb al aan een paar mensen gevraagd of zei weten waar Sinterklaas woont. Niemand weet dat dus ik ga naar de burgemeester. Die man heet José en die weet dat vast wel. Maar eerst ga ik op zoek naar de pakhuizen van Sinterklaas om te kijken of alle cadeautjes al zijn gekocht en of ze wel zijn ingepakt.</em></p>
            <p><em>Om de paar kilometer moet ik van de politie - die heet hier Guardia Civil - stoppen en vragen ze mij wat ik aan het doen ben. Dan leg ik uit dat ik naar Sinterklaas op zoek ben en dan mag ik gelukkig weer doorrijden. Maar ze kijken hier wel heel streng hoor, veel strenger dan thuis.</em></p>
            <p><em>Het is geluk want weten jullie (vast niet ha ha) dat het gemeentehuis, waar de burgemeester woont, daar is ook de haven. Dan kan ik meteen kijken of de Pakjesboot al klaar ligt om uit te varen, want het wordt best wel tijd. Over twee weken moet Sinterklaas ook in Huizen komen!</em></p>
            <p><em>Ik stuur weer een brief naar Nederland als ik Sinterklaas heb gevonden.</em></p>
            <p><em>Adios y hasta pronto</em></p>
            <p><em>Jullie speciale verslaggever</em></p>
            <p className="handtekening" style={{ marginBottom: '50px' }}>Erico</p>
            <p />
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
            <div style={{
              textAlign: 'center', position: 'sticky', top: '0', height: '100vh', display: 'flex',
            }}
            >

              <StaticImage
                style={{
                  margin: 'auto', width: '100%', position: 'relative', maxWidth: '321px',
                }}
                src="../assets/images/sinterklaas-2020.jpg"
                alt="Intocht Sinterklaas"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sponsoren">
        <Sponsoren />
      </section>

      <Footer />

    </Layout>
  );
};
export default Home;
