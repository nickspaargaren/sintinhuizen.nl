import { StaticImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";

import Sponsors from "./Sponsors";

export const Footer = (): ReactElement => (
  <>
    <section className="sponsors bg-white min-h-0">
      <div>
        <h3 className="text-center">Onze sponsoren</h3>
        <p className="text-center -mt-4 mb-8">
          Klik op een logo voor meer informatie
        </p>
        <Sponsors />
      </div>
    </section>
    <footer className="bg-red p-5 text-center">
      <p>
        De jaarlijkse intocht van de Sint in Huizen wordt georganiseerd door de
        St. Intocht Sint Nicolaas Huizen
        <br />
        Bestuur: Roeland Bijlard, Nina Thiel, Laura Toele, Jurgen van Wessel en
        Justin Koenen.
      </p>
      <p>
        Bankrek. NL63 RABO 0344 4312 74 | Tel. woordvoerder 0640 83 61 54 |{" "}
        <a href="mailto:sintinhuizen@gmail.com">sintinhuizen@gmail.com</a> | KvK
        75336707
      </p>
      <StaticImage
        alt="mijter"
        src="../assets/images/mijter.png"
        className="w-7"
      />
    </footer>
  </>
);
