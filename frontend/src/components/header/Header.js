import React from "react"

import styles from './header.module.css';
import logo from "../../assets/images/logo.svg";

import sinterklaas from "../../assets/images/sinterklaas.svg";


const Header = () => {

  return (
        <div className={`grid-2x ${styles.header}`}>
          <div className={styles.headertekst}>
            
            <div>
              <h1>
              <strong>Aankomst</strong> <br/><span>Sint Nicolaas</span> <br/><small>in</small> <strong>Huizen</strong>
              </h1>
              <h2>Je kunt dit zien op zaterdag <span><strong>14 november</strong></span> vanaf <strong>14:00</strong> uur op deze site</h2>
            </div>
            <img src={logo} alt="Logo" />
          </div>
          
          <div style={{display: 'flex'}}>
            <img style={{marginTop: 'auto', width: '100%', maxHeight: '80vh'}} src={sinterklaas} alt="Sinterklaas" width="415px" height="440px" />
          </div>
        </div>
  )
}

export default Header





























