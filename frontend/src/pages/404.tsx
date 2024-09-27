import React, { ReactElement } from "react";

import Layout from "../components/Layout";

const Notfound = (): ReactElement => (
  <Layout>
    <div className="absolute flex top-0 bottom-0 left-0 right-0">
      <div className="m-auto text-center">
        <h1>404</h1>
        <p>Sorry, deze pagina bestaat niet meer.</p>
      </div>
    </div>
  </Layout>
);
export default Notfound;
