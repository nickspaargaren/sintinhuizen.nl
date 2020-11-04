import React from "react"

import styles from './header.module.css';
import logo from "../../assets/images/logo.svg";

import sinterklaas from "../../assets/images/sinterklaas.svg";


const Header = () => {

  return (
        <div className={`grid-2x ${styles.header}`}>
          <div>
            <img src={logo} alt="Logo" />
            Headertekst
          </div>
          
          <div>
            <img src={sinterklaas} alt="Sinterklaas" width="415px" height="440px" />
          </div>
        </div>
  )
}

export default Header





























