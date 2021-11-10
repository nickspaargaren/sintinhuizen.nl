import React, { ReactElement } from 'react';
import styled from 'styled-components';

import gebouwen from '../assets/images/gebouwen.svg';
import logo from '../assets/images/logo.svg';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

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

const Home = (): ReactElement => (
  <Layout title="Home" description="Informatie over de aankomst Sint Nicolaas in de werkhaven van het Nautisch Kwartier!">
    <section>
      <StyledHeader className="grid-2x">
        <div className="headertekst">
          <div>
            <h1>
              Verkeer en parkeren
            </h1>

            <p>Op de dag van de intocht zijn de mensen van STIEVON (Stichting Evenementen Ondersteuning) aanwezig. Zij staan bij de wegafsluitingen om een goede verkeersafwikkeling te regelen.</p>

            <ul>
              <li>
                Vanaf 10 uur:
                {' ' }
                Havenstraat is afgesloten voor verkeer. Het wordt een wandel- en fietszone ‘in en uit’ tot Nautisch Kwartier leeg is. De IJsbaankade is afgesloten vanaf de parkeergarage ter hoogte van huisnummer 121.
              </li>
              <li>
                Vanaf 12 uur:
                {' ' }
                Waterbalk is toegankelijk voor bewoners en bezoekers Restaurant Haven van Huizen, maar geen doorgang naar de Havenstraat.
              </li>
              <li>
                Vanaf 12 uur:
                {' ' }
                IJsselmeerstraat vanaf het evenemententerrein:
                {' ' }
                alleen doorgang met parkeerkaarten en voor bezoekers restaurants.
                <br />
                Het evenemententerrein is geopend als parkeerplaats Sint.

              </li>
              <li>
                Vanaf 14:30 uur:
                {' ' }
                Gehele IJsbaankade afgesloten.
              </li>
            </ul>

          </div>
          <img src={logo} alt="Logo" style={{ width: '300px', height: '195px' }} loading="lazy" />
        </div>
        <div className="illustratie">
          <div style={{ textAlign: 'right' }}><Button title="Terug naar home" url="/" /></div>
        </div>
      </StyledHeader>
    </section>

    <Footer />

  </Layout>
);
export default Home;
