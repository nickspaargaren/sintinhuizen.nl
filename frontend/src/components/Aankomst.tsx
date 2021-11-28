import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { StaticImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

import Programma from './Programma';

const StyledAankomst = styled.div`

.brief {
  background-color: #fff;
  border: 2px solid #f1cb19;
  box-shadow: 0px 50px 30px -30px rgba(0,0,0,.2);
  color: #333;
  /* padding: 30px 30px 10px; */
  transform: perspective(3000px) rotateY(19deg) rotateX(4deg) rotate(-1deg);
}

.brief h3 {color: #c32c2b}

.afbeelding {
  background: rgba(255,255,255,.7);
  box-shadow: 0 10px 39px -5px rgba(0,0,0,.2);
  box-sizing: border-box;
  line-height: 0;
  margin: 0 0 30px;
  overflow: hidden;
  padding: 3px;
  position: relative;
  text-align: center;
  transform: rotate(-2deg);
  width: 100%;
}

.tekst {
  background-color: #fff; 
  border: 2px solid #f1cb19;
  box-shadow: 0px 50px 30px -30px rgba(0,0,0,.2);
  color: #333;
  padding: 20px;
  transform: perspective(3000px) rotateY(19deg) rotateX(4deg) rotate(-1deg);}

  @media screen and (max-width: 768px) {
    .brief, .tekst {transform: none;}
  }
`;

const Aankomst = (): ReactElement => (
  <StyledAankomst>
    <h2 style={{ textAlign: 'center', margin: '0px 0 40px' }}>
      Activiteiten Sint Nicolaas
      {' '}
      <strong>2021</strong>
      {' '}
      in Huizen
    </h2>

    <div className="grid-3x">
      <div className="brief">
        <Programma />
      </div>
      <div>
        <div className="afbeelding">
          <StaticImage src="../assets/images/sint-en-pieten-op-pakjesboot.jpg" alt="Sint en pieten op de boot" />
        </div>
        <div className="tekst">
          De Sint bezoekt het winkelcentrum Hart van Huizen in het Oude Dorp. Op
          {' '}
          <OutboundLink href="https://hartvanhuizen.nl" rel="noopener noreferrer" target="_blank">HartvanHuizen.nl</OutboundLink>
          {' '}
          kun je hier alles over lezen.
        </div>
      </div>
      <div>
        <div className="afbeelding">
          <StaticImage src="../assets/images/sint-op-kade.jpg" alt="Sint op de kade in de haven van Huizen" />
        </div>
        <div className="tekst">
          Op zaterdag 27 november 2021 bezocht de Sint het winkelcentrum Oostermeent. Zie
          {' '}
          <OutboundLink href="https://www.winkelcentrumoostermeent.nl" rel="noopener noreferrer" target="_blank">Winkelcentrumoostermeent.nl</OutboundLink>
        </div>
      </div>
    </div>
  </StyledAankomst>
);

export default Aankomst;
