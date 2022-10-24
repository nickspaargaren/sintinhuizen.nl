import '../styles/index.css';

import React, { PropsWithChildren,ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import { LayoutProps } from '../types';

const Layout = ({ children, title, description, canonical }: PropsWithChildren<LayoutProps>): ReactElement => (
  <div className="page">
    <Helmet>
      <meta charSet="utf-8" />
      {canonical && <link rel="canonical" href={canonical} />}
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
