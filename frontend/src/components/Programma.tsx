import { graphql, useStaticQuery } from 'gatsby';
import React, { ReactElement } from 'react';
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
}

.row div {padding: 20px;}

.row div:first-child svg {margin-right: 8px;}

.row:nth-child(even) {
  background: #fff8f8;
}
`;

const Programma = (): ReactElement => {
  const { tijdslots } = useStaticQuery(
    graphql`
    query {
      tijdslots: allSanityProgramma {
          nodes {
            id
            titel
            tijd
          }
        }
    } 
    `,
  );
  return (
    <StyledProgramma>
      <h2 style={{ padding: '20px', margin: '0px' }}>Programma</h2>
      {tijdslots.nodes
        .sort((a, b) => a.tijd - b.tijd)
        .map((item) => (
          <div key={item.id} className="row">
            <div>{item.titel}</div>
          </div>
        ))}
    </StyledProgramma>
  );
};

export default Programma;
