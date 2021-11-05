import React, { ReactElement } from 'react';
import styled from 'styled-components';

import gebouwen from '../assets/images/gebouwen.svg';
import logo from '../assets/images/logo.svg';
import sinterklaas from '../assets/images/sinterklaas.svg';

const StyledHeader = styled.div`

  background-color: #84cdde;
  background-image: url(${gebouwen});
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 825px 175px;
  max-width: 100%;
  min-height: inherit;

  .headertekst {display: flex; flex-direction: column;}
  .headertekst > div {margin-bottom: 20px;}
  .headertekst > img {margin: auto auto 0 0; max-width: 300px;}

  .illustratie {display: flex;}
  .illustratie img {margin-top: auto; max-height: 80vh; width: 100%;}


  @media screen and (max-width: 768px) {
    .headertekst {flex-direction: column-reverse;}
    .headertekst > div {margin-bottom: auto;}
    .headertekst > img {margin-bottom: 20px;}

    .headertekst > div .knop {font-size: 12px;}

    .illustratie img {max-height: 300px;}
  }
`;

const Header = (): ReactElement => (
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

        <p><strong>Op zaterdag 13 november komt Sint Nicolaas met zijn Pieten aan in Huizen. Ze zullen worden verwelkomd in de haven van het Nautisch Kwartier. De feestelijkheden beginnen om 13.30 uur.</strong></p>

        <p><strong>Coronamaatregelen bij de intocht van Sint Nicolaas in Huizen.</strong></p>

        <p>
          Toegang tot het aankomstterrein is alleen mogelijk met een coronatoegangsbewijs. Dat is aan te vragen via internet, en geldt vanaf 18 jaar.
          <br />
          Als je het als ouder niet hebt, is er dan wellicht een vriendelijke buurman of buurvrouw die het bewijs wel heeft en de kinderen kan meenemen?
        </p>

        <p>
          Het haventerrein is toegankelijk via drie sluizen. In elke sluis staan twee controleurs. Om snelle doorstroming te krijgen is het dringende verzoek de telefoon of document met het toegangsbewijs gereed te houden. En: kom op tijd!
          Het terrein is open vanaf 12.30 uur
        </p>

        <p>We zijn blij weer een leuk feest voor de kinderen te kunnen organiseren. En met ieders medewerking gaat dat zeker lukken!</p>

        <p>Bestuur Stichting Intocht Sint Nicolaas Huizen</p>

      </div>
      <img src={logo} alt="Logo" style={{ width: '300px', height: '195px' }} loading="lazy" />
    </div>
    <div className="illustratie">
      <img src={sinterklaas} alt="Sinterklaas" width="415px" height="440px" loading="lazy" />
    </div>
  </StyledHeader>
);

export default Header;
