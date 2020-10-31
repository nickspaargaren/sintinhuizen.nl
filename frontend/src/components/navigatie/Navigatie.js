import React from "react"
import { Link } from "gatsby"
import styles from './navigatie.module.css';
import { RiHome2Line, RiCalendar2Line, RiImage2Line, RiFileList3Line, RiHeartLine } from 'react-icons/ri';
import logo from "../../assets/images/logo.svg";

const Navigatie = () => {
  return (
    <div className={styles.houder}>
      <div className={styles.logo}><img src={logo} alt="Logo" /></div>
      <nav>
          <Link activeClassName={styles.actief} to="/"><RiHome2Line/><span>Home</span></Link>
          <Link activeClassName={styles.actief} to="/programma"><RiCalendar2Line/><span>Programma</span></Link>
          <Link activeClassName={styles.actief} to="/fotos"><RiImage2Line/><span>Fotos</span></Link>
          <Link activeClassName={styles.actief} to="/bericht"><RiFileList3Line/><span>Bericht van Sinterklaas</span></Link>
          <Link activeClassName={styles.actief} to="/sponsoren"><RiHeartLine/><span>Sponsoren</span></Link>
      </nav>
    </div>
  )
}

export default Navigatie