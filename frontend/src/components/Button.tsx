import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  background-color: #c32c2b;
  border-radius: 3px;
  box-shadow: 0px 2px 0px rgba(0,0,0,.15);
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: 'Alfa Slab One';
  letter-spacing: .05em;
  line-height: normal;
  margin: 0 10px 10px 0;
  padding: 10px 13px;
  text-align: center;
  text-decoration: none;
  transition: 0.3s all ease;

  &:hover {
    background: #f1cb19;
  }

  @media screen and (max-width: 768px) {
      display: block;
  }
`;

type ButtonProps = {
  title: string;
  url: string;
}

const Button = ({
  title, url,
}: ButtonProps) => (
  <StyledButton as={Link} to={url} className="button">
    {title}
  </StyledButton>
);

export default Button;
