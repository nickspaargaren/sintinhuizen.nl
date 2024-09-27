import React, { PropsWithChildren, ReactElement } from "react";

const Layout = ({ children }: PropsWithChildren): ReactElement => (
  <main>{children}</main>
);

export default Layout;
