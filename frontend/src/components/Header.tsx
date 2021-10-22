import React, { ReactElement } from 'react';
import { Link } from 'react-scroll';
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

  .headertekst {display: flex; flex-direction: column}
  .headertekst > div {margin-bottom: 20px;}
  .headertekst > img {margin: auto auto 0 0; max-width: 300px;}

  .illustratie {display: flex;}
  .illustratie img {margin-top: auto; max-height: 80vh; width: 100%;}

  .headertekst > div .knop {
    background-color: #c32c2b;
    border-radius: 3px;
    box-shadow: 0px 2px 0px rgba(0,0,0,.15);
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: 'Alfa Slab One';
    letter-spacing: .05em;
    line-height: normal;
    padding: 10px 13px;
  }

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
        <Link className="knop" to="aankomst" smooth>Bekijk de aankomst op 14 november 2020!</Link>
      </div>
      <img src={logo} alt="Logo" style={{ width: '300px', height: '195px' }} loading="lazy" />
    </div>
    <div className="illustratie">
      <img src={sinterklaas} alt="Sinterklaas" width="415px" height="440px" loading="lazy" />
    </div>
  </StyledHeader>
);

export default Header;
