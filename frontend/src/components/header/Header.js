import React from "react"
import { Link } from "react-scroll";

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

              <Link className={styles.knop} to="aankomst" smooth={true}>Bekijk de aankomst op 14 november!</Link>

            </div>
            <img src={logo} alt="Logo" style={{width: '300px', height: '195px'}} loading="lazy" />
          </div>
          
          <div style={{display: 'flex'}}>
            <img style={{marginTop: 'auto', width: '100%', maxHeight: '80vh'}} src={sinterklaas} alt="Sinterklaas" width="415px" height="440px" loading="lazy" />
          </div>
        </div>
  )
}

export default Header





























