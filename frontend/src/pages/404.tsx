import React, { ReactElement } from "react";
import styled from "styled-components";

import Layout from "../components/Layout";

const StyledNotfound = styled.div`
  bottom: 0;
  display: flex;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  > div {
    margin: auto;
    text-align: center;
  }
`;

const Notfound = (): ReactElement => (
  <Layout>
    <StyledNotfound>
      <div>
        <h1>404</h1>
        <p>Sorry, deze pagina bestaat niet meer.</p>
      </div>
    </StyledNotfound>
  </Layout>
);
export default Notfound;
