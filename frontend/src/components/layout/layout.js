import React from "react"
import { Helmet } from "react-helmet";
import GlobalStyles from "../../styles/GlobalStyles.js";
import Navigatie from "../navigatie/Navigatie.js";

const Layout = ({ children, title, description }) => {

  return (
    <div className="page">
      <Helmet>
          <html lang="nl" />
          <meta charSet="utf-8" />
          <title>{title} | Stichting Intocht Sint Nicolaas Huizen</title>
          <meta name="description" content={description} />
      </Helmet>
      <GlobalStyles/>
      <main>{children}</main>
      {/* <Navigatie/> */}
    </div>
  )
  
}

export default  Layout