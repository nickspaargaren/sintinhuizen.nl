import React, { HTMLAttributes, PropsWithChildren, ReactElement } from "react";

const Letter = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): ReactElement => (
  <div
    className={`bg-white p-4 border-2 border-yellow shadow-lg text-gray-900 mb-4 md:skew-y-1 md:-rotate-2 ${props.className}`}
  >
    {children}
  </div>
);

export default Letter;
