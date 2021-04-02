import React from "react"
import { Helmet } from "react-helmet";
import GlobalStyle from "../styles/globalStyles";

const Layout = ({ children, title, description }) => {

  return (
    <div className="page">
      <GlobalStyle />
      <Helmet>
          <html lang="nl" />
          <meta charSet="utf-8" />
          <title>{title} | Stichting Intocht Sint Nicolaas Huizen</title>
          <meta name="description" content={description} />
      </Helmet>
      <main>{children}</main>
    </div>
  )
  
}

export default  Layout