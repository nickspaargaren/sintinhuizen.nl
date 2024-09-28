import React, { PropsWithChildren, ReactElement } from "react";
import styled from "styled-components";

const StyledLetter = styled.div`
  transform: perspective(3000px) rotateY(11deg) rotateX(4deg) rotate(-1deg);

  @media screen and (max-width: 768px) {
    transform: none;
  }
`;

const Letter = ({ children }: PropsWithChildren): ReactElement => (
  <StyledLetter className="bg-white p-4 border-2 border-yellow shadow-lg text-gray-900 mb-4">
    {children}
  </StyledLetter>
);

export default Letter;
