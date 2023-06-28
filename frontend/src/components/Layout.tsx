import '../styles/index.css';

import React, { PropsWithChildren,ReactElement } from 'react';

const Layout = ({ children }: PropsWithChildren): ReactElement => (
  <div className="page">
    <main>{children}</main>
  </div>
);

export default Layout;
