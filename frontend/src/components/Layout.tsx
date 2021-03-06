import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

interface LayoutProps {
  children: any,
  title: string,
  description: string
}
const Layout = ({ children, title, description }: LayoutProps) => (
  <div className="page">
    <Helmet>
      <html lang="nl" />
      <meta charSet="utf-8" />
      <title>
        {title}
        {' '}
        | Stichting Intocht Sint Nicolaas Huizen
      </title>
      <meta name="description" content={description} />
    </Helmet>
    <main>{children}</main>
  </div>
);

export default Layout;
