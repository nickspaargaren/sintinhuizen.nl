import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactElement } from 'react';
import { FaRegClock } from 'react-icons/fa';
import styled from 'styled-components';

const StyledProgramma = styled.div`

  box-sizing: border-box;
  margin: auto;
  padding: 0;
  text-align: left;

.row {
  background: #fff;
  color: #505050;
  display: grid;
  font-size: 15px;
  grid-template-columns: 100px 1fr;
}

.row div {padding: 20px;}

.row div:first-child {
  background: #e2a531;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
}

.row div:first-child svg {margin-right: 8px;}

.row:nth-child(even) {
  background: #fff8f8;
}
`;

const Programma = (): ReactElement => {
  const { tijdslots } = useStaticQuery(
    graphql`
    query {
      tijdslots: allSanityProgramma(sort: {fields: tijd}) {
          nodes {
            id
            tijd
            titel
          }
        }
    } 
    `,
  );
  return (
    <StyledProgramma>
      {tijdslots.nodes.map((item) => (
        <div key={item.id} className="row">
          <div>
            <FaRegClock />
            {item.tijd}
          </div>
          <div>{item.titel}</div>
        </div>
      ))}
    </StyledProgramma>
  );
};

export default Programma;
