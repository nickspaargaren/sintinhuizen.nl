import '../styles/index.css';

import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import { LayoutProps } from '../types';

const Layout = ({ children, title, description }: LayoutProps): ReactElement => (
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
