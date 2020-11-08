import React from "react"
import { Helmet } from "react-helmet";
import GlobalStyles from "../../styles/GlobalStyles.js";

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
    </div>
  )
  
}

export default  Layout