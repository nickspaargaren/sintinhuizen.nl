import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import { FaRegClock } from 'react-icons/fa';

const StyledProgramma = styled.div`

  margin: auto;
  padding: 0;
  box-sizing: border-box;
  text-align: left;


.row {
  display: grid;
  grid-template-columns: 100px 1fr;
  color: #505050;
  font-size: 15px;
  background: #fff;
}
.row div {padding: 20px;}


.row div:first-child {
  white-space: nowrap;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  background: #e2a531;
  color: #fff;
}

.row div:first-child svg {margin-right: 8px;}

.row:nth-child(even) {
  background: #fff8f8;
}
`;

const Programma = () => {
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
    `
  )
  return (
        <StyledProgramma>
          {tijdslots.nodes.map((item) =>
              <div key={item.id} className="row">
                <div><FaRegClock/>{item.tijd}</div>
                <div>{item.titel}</div>
              </div>
          )}
        </StyledProgramma>
  )
}

export default Programma