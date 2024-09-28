import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
  font-family: "Alfa Slab One";
`;

type ButtonProps = {
  title: string;
  url: string;
};

const Button = ({ title, url }: ButtonProps) => (
  <StyledButton
    as={Link}
    to={url}
    className="button block p-3 leading-none rounded lg:inline-block bg-red hover:bg-yellow transition text-white text-center tracking-wider mr-2 mb-2"
  >
    {title}
  </StyledButton>
);

export default Button;
