import { StaticImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";

import Sponsors from "./Sponsors";

const Footer = (): ReactElement => (
  <>
    <section className="sponsors">
      <div>
        <h3 style={{ textAlign: "center" }}>Onze sponsoren</h3>
        <p style={{ textAlign: "center", margin: "-15px 0px 25px" }}>
          Klik op een logo voor meer informatie
        </p>
        <Sponsors />
      </div>
    </section>
    <footer>
      <p>
        De jaarlijkse intocht van de Sint in Huizen wordt georganiseerd door de
        St. Intocht Sint Nicolaas Huizen
        <br />
        Bestuur: Roeland Bijlard, Hans Borremans, Laura Toele, Jurgen van Wessel
        en Justin Koenen.
      </p>
      <p>
        Bankrek. NL63 RABO 0344 4312 74 | Tel. woordvoerder 0651 98 92 18 |{" "}
        <a href="mailto:info@sintinhuizen.nl">info@sintinhuizen.nl</a> |
        postadres: Slangekruid 6, 1273 VM Huizen | KvK 75336707
      </p>
      <StaticImage
        alt="mijter"
        src="../assets/images/mijter.png"
        style={{ height: "35px", width: "30px", verticalAlign: "middle" }}
      />
    </footer>
  </>
);

export default Footer;
