import React from "react"

import styles from './header.module.css';
import logo from "../../assets/images/logo.svg";

import sinterklaas from "../../assets/images/sinterklaas.svg";


const Header = () => {

  return (
        <div className={`grid-2x ${styles.header}`}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <img style={{margin: '0 auto auto 0'}} src={logo} alt="Logo" />
            <h1>
            <strong>Aankomst</strong> <br/><span>Sint Nicolaas</span> <br/><small>in</small> <strong>Huizen</strong>
            </h1>
            <p>Je kunt dit zien op zaterdag 14 november vanaf 14:00 uur op deze site</p>
          </div>
          
          <div style={{display: 'flex'}}>
            <img style={{marginTop: 'auto', width: '100%', maxHeight: '80vh'}} src={sinterklaas} alt="Sinterklaas" width="415px" height="440px" />
          </div>
        </div>
  )
}

export default Header





























