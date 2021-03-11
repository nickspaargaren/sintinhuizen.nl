import React from "react"
import { Link } from "react-scroll";

import logo from "../../assets/images/logo.svg";

import sinterklaas from "../../assets/images/sinterklaas.svg";
import gebouwen from "../../assets/images/gebouwen.svg";

import styled from 'styled-components';

const StyledHeader = styled.div`

  background-color: #84cdde;
  background-image: url(${gebouwen});
  min-height: inherit;
  width: 100%;
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 825px 175px;

  .headertekst {display: flex; flex-direction: column}
  .headertekst > div {margin-bottom: 20px;}
  .headertekst > img {margin: auto auto 0 0; max-width: 300px;}

  .illustratie {display: flex;}
  .illustratie img {margin-top: auto; width: 100%; max-height: 80vh;}

  .headertekst > div .knop {
    display: inline-block;
    background-color: #f1cb19;
    color: #fff;
    padding: 10px 13px;
    border-radius: 3px;
    font-family: 'Alfa Slab One';
    line-height: normal;
    box-shadow: 0px 2px 0px rgba(0,0,0,.15);
    cursor: pointer;
    letter-spacing: .05em;
  }

  @media screen and (max-width: 768px) {
    .headertekst {flex-direction: column-reverse;}
    .headertekst > div {margin-bottom: auto;}
    .headertekst > img {margin-bottom: 20px;}

    .headertekst > div .knop {font-size: 12px;}

    .illustratie img {max-height: 300px;}
  }
`;

const Header = () => {

  return (
        <StyledHeader className="grid-2x">
          <div className="headertekst">
            <div>
              <h1><strong>Aankomst</strong> <br/><span>Sint Nicolaas</span> <br/><small>in</small> <strong>Huizen</strong></h1>
              <Link className="knop" to="aankomst" smooth={true}>Bekijk de aankomst op 14 november!</Link>
            </div>
            <img src={logo} alt="Logo" style={{width: '300px', height: '195px'}} loading="lazy" />
          </div>
          <div className="illustratie">
            <img src={sinterklaas} alt="Sinterklaas" width="415px" height="440px" loading="lazy" />
          </div>
        </StyledHeader>
  )
}

export default Header