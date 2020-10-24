import React from "react"
import { Helmet } from "react-helmet";
import GlobalStyles from "../../styles/GlobalStyles.js";
import Navigatie from "../navigatie/Navigatie.js";
// import './index.css';

const Layout = ({ children, title, description }) => {

  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
      </Helmet>
      <GlobalStyles/>
      <Navigatie/>
      <div
        style={{
          margin: `40px auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
  
}

export default  Layout