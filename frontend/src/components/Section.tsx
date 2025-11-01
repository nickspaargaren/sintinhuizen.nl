import React, { PropsWithChildren, ReactElement } from "react";

export const Section = ({ children }: PropsWithChildren): ReactElement => (
  <div className="flex min-h-screen justify-center">
    <div className="container py-14 m-auto">{children}</div>
  </div>
);
