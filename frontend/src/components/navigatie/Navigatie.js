import React from "react"
import { Link } from "gatsby"
import styles from './navigatie.module.css';

const Navigatie = () => {
  return (
    <nav className={styles.houder}>
        <Link activeClassName={styles.actief} to="/"><span>Home</span></Link>
        <Link activeClassName={styles.actief} to="/programma"><span>Programma</span></Link>
        <Link activeClassName={styles.actief} to="/fotos"><span>Fotos</span></Link>
        <Link activeClassName={styles.actief} to="/bericht"><span>Bericht</span></Link>
    </nav>
  )
}

export default Navigatie