import React, { ReactElement } from "react";

const Notfound = (): ReactElement => (
  <div className="absolute flex top-0 bottom-0 left-0 right-0">
    <div className="m-auto text-center">
      <h1>404</h1>
      <p>Sorry, deze pagina bestaat niet meer.</p>
    </div>
  </div>
);
export default Notfound;
