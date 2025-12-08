import { graphql, Link, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";

import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { Letter } from "../components/Letter";
import { PhotoGallery } from "../components/PhotoGallery";
import { Section } from "../components/Section";
import { VimeoVideo } from "../components/VimeoVideo";
import { usePhotoGallery } from "../hooks/usePhotoGallery";

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        arrivalDate
      }
    }
    berichtsint: markdownRemark(
      fileAbsolutePath: { regex: "/bericht-sint.md/" }
    ) {
      html
    }
    programHaven: markdownRemark(
      fileAbsolutePath: { regex: "/program/haven.md/" }
    ) {
      html
    }
    programParade: markdownRemark(
      fileAbsolutePath: { regex: "/program/parade.md/" }
    ) {
      html
    }
    programKrachtcentrale: markdownRemark(
      fileAbsolutePath: { regex: "/program/krachtcentrale.md/" }
    ) {
      html
    }
  }
`;

const Home = ({ data }: PageProps<Queries.IndexPageQuery>): ReactElement => {
  const [photos2024, photos2025, drawings] = usePhotoGallery();

  const {
    berichtsint,
    programHaven,
    programKrachtcentrale,
    programParade,
    site,
  } = data;

  return (
    <>
      <div
        className={`bg-purple bg-[url('/images/buildings.svg')] bg-bottom bg-repeat-x max-w-full`}
      >
        <Section>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="headerintro flex flex-col">
              <div>
                <h1>
                  <small>Laatste nieuws!</small> <br />
                  <strong className="whitespace-nowrap">
                    Sint Nicolaas
                  </strong>{" "}
                  <small>komt</small>{" "}
                  <span>{site?.siteMetadata?.arrivalDate}</span>{" "}
                  <small>aan in</small> <strong>Huizen</strong>
                </h1>
                <p>
                  De Stichting Intocht Sint Nicolaas Huizen heeft daarom een
                  feestprogramma georganiseerd!
                </p>
                <p>
                  Verderop kun je hier alles over lezen!
                  <br />
                  Hij brengt ook een Glutenvrije Piet mee!
                </p>
              </div>
              <StaticImage
                alt={`Poster Sint Nicolaas intocht ${site?.siteMetadata?.arrivalDate}`}
                src="../assets/images/poster-2025.jpg"
                className="w-72"
              />
              <div className="mt-auto">
                <h3>Dag kinderen,</h3>
                <p>
                  Sint Nicolaas komt met 29 strooipieten die builtjes met
                  pepernoten en snoepjes uitdelen. Zijn vraag is of jullie de
                  lege builtjes en ander afval mee naar huis willen nemen of in
                  de kliko&apos;s willen gooien. Daarmee sparen we de natuur,
                  zegt de Sint en natuurlijk zijn we dat met hem eens!
                </p>
              </div>
            </div>
            <div className="illustration flex flex-col">
              <StaticImage
                src="../assets/images/sinterklaas.png"
                alt="Sinterklaas"
                className="max-h-[80vh]"
                objectFit="contain"
              />
              <h3>
                <strong>Sint Nicolaas</strong> kijkt in het grote boek waarin
                staat welke cadeautjes de kinderen gevraagd hebben.
              </h3>
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <h2 className="text-center mb-8">
          Feestprogramma <strong>{site?.siteMetadata?.arrivalDate}</strong>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <Letter>
            <div
              dangerouslySetInnerHTML={{ __html: programHaven?.html || "" }}
            />
          </Letter>
          <Letter>
            <div
              dangerouslySetInnerHTML={{ __html: programParade?.html || "" }}
            />
          </Letter>
          <Letter>
            <div
              dangerouslySetInnerHTML={{
                __html: programKrachtcentrale?.html || "",
              }}
            />
          </Letter>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div dangerouslySetInnerHTML={{ __html: berichtsint?.html || "" }} />

          <div>
            <div className="flex sticky top-0 w-full h-screen m-auto text-center">
              <StaticImage
                className="m-auto w-full h-full relative"
                src="../assets/images/sint-en-piet-op-kade.jpg"
                alt="Sint en piet op de kade"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-center mb-8">
          Activiteiten Sint Nicolaas <strong>2025</strong> in Huizen
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <Letter>
              <p>
                De Sint komt {site?.siteMetadata?.arrivalDate} aan in Huizen met
                zijn Pieten.
              </p>
              <p>
                Je kunt hem zien bij de aankomst in de werkhaven (14:00 uur), de
                optocht in de Havenstraat (15:30 uur) en bij de Krachtcentrale
                (16:00 uur)
              </p>
              <p>
                De daaropvolgende weken gaan Sint en Pieten naar Winkelcentrum
                Oostermeent en winkelcentrum Hart van Huizen.
              </p>
              <p>
                Van 15 november tot 5 december is het Huizer Museum ’t Gooisch
                Sinterklaashuis. Zie elders op deze website en{" "}
                <Link to="https://gooisch-sinterklaashuis.nl" target="_blank">
                  gooisch-sinterklaashuis.nl
                </Link>
              </p>
            </Letter>
          </div>
          <div>
            <Letter className="p-[0] border-none">
              <StaticImage
                alt="Sinterklaas Zaterdag 29 November om 15.00 uur in het haventje van Oostermeent!"
                src="../assets/images/poster-oostermeent-2025.jpg"
              />
            </Letter>
          </div>
          <div>
            <Letter className="p-[0] border-none">
              <StaticImage
                alt="Sintactiviteiten in winkelcentrum het Hart van Huizen. Woensdag 3 december en vrijdag 5 december is de sint daar aanwezig."
                src="../assets/images/poster-sinterklaas-hart-van-huizen-2025.jpg"
              />
            </Letter>
          </div>
        </div>
      </Section>

      <Section>
        <h3 className="text-center mb-8">
          <strong>Glutenvrije</strong> Piet & kruidnoten
        </h3>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <div>
            <Letter>
              <p>
                <strong>Waarom Glutenvrije Piet?</strong>
                <br />
                In Nederland heeft 1 op de 100 kinderen de auto-immuunziekte
                coeliakie. Zij moeten om medische redenen een strikt en
                levenslang glutenvrij dieet volgen. De intocht van Sinterklaas
                is voor hen niet altijd feestelijk. Ze mogen de kruidnoten niet
                eten en highfiven met de Pieten gaat ook al niet, want van
                kruimels op de handschoen worden zij al ziek.
              </p>
              <p>
                <strong>Glutenvrije kruidnoten</strong>
                <br />
                De bakkerij van glutenvrije kruidnoten maakt deze heerlijke
                kruidnoten voor kinderen die glutenvrij eten.
              </p>
            </Letter>
            <Letter>
              <p>
                <strong>Hoe herkent Glutenvrije Piet jou?</strong>
                <br />
                Print deze vlag, hang &apos;m aan je pietenmuts of plak m om een
                stokje heen. Als je &apos;m goed omhoog houdt, ziet Glutenvrije
                Piet dat jij de glutenvrije kruidnoten mag hebben! Je kunt ook
                de kleurplaat downloaden, inkleuren en omhoog houden. Verwacht
                je slecht weer? Dan is lamineren een uitkomst.
              </p>
              <Button
                title="Print het vlaggetje"
                url="https://www.ncv.nl/l/library/download/urn:uuid:175f2bd8-7a80-4951-b8e3-14fcf84ca896/glutenvrij+groene+vlag+met+pietje.pdf"
              />
              <Button
                title="Print de kleurplaat"
                url="https://www.ncv.nl/l/library/download/urn:uuid:05f0afe4-9136-48c6-86a5-e70fd76dab2e/kleurplaat+glutenvrije+piet.pdf"
              />
            </Letter>
          </div>
          <div>
            <div className="rotatedImage">
              <StaticImage
                src="../assets/images/glutenvrije-pepernoten-ingrediënten.jpg"
                alt="Glutenvrije pepernoten ingrediënten"
              />
            </div>
          </div>
          <div>
            <Letter>
              <p>
                <strong>Hoe herken je Glutenvrije Piet?</strong>
                <br />
                De Glutenvrije Piet draagt een speciale tas, met daarin de
                glutenvrije kruidnoten, zodat ze niet vermengd worden met ander
                snoepgoed. De Glutenvrije Piet houdt een vlag omhoog met het
                Glutenvrije Piet logo erop. Je herkent hem dus zeker!
              </p>
            </Letter>
            <div className="rotatedImage">
              <StaticImage
                src="../assets/images/glutenvrije-pepernoten-zak.jpeg"
                alt="Zak glutenvrije pepernoten"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-center mb-8">
          Het <strong>Huizer Museum</strong> is dit jaar het Gooisch{" "}
          <strong>Sinterklaashuis</strong>.
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rotatedImage">
            <StaticImage
              src="../assets/images/sint-in-huizer-museum-deel-1.jpg"
              alt="Sint in Huizer Museum deel 1"
            />
          </div>
          <div className="rotatedImage">
            <StaticImage
              src="../assets/images/sint-in-huizer-museum-deel-2.jpg"
              alt="Sint in Huizer Museum deel 2"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div>
          <h3 className="text-center">
            Foto&apos;s van de aankomst op <strong>15 november</strong> 2025
          </h3>
          <p className="text-center mt-4 mb-8">
            Klik op de foto voor een vergroting
          </p>
          <PhotoGallery images={photos2025} />
        </div>
      </Section>

      <Section>
        <div>
          <h3 className="text-center">
            Foto&apos;s van de aankomst op <strong>16 november</strong> 2024
          </h3>
          <p className="text-center mt-4 mb-8">
            Klik op de foto voor een vergroting
          </p>
          <PhotoGallery images={photos2024} />
        </div>
      </Section>

      <Section>
        <h3 className="text-center">
          Bedankt kinderen voor deze <strong>prachtige tekeningen</strong>!
        </h3>
        <p className="text-center mt-4 mb-8">
          Klik op de foto voor een vergroting
        </p>
        <PhotoGallery images={drawings} />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <StaticImage
            src="../assets/images/kleurplatenwedstrijd-sint-2024.jpg"
            alt="Kleurplatenwedstrijd 2024"
          />
          <StaticImage
            src="../assets/images/bedankt-sint.jpeg"
            alt="Sint bedankt"
          />
          <StaticImage
            src="../assets/images/groep-pieten.jpeg"
            alt="Groep pieten"
          />
        </div>
      </Section>

      <Section>
        <h3 className="text-center mb-8">
          Muziekvideo van de aankomst van Sint Nicolaas op{" "}
          <strong>13 november</strong> 2021
        </h3>
        <p className="text-center mt-4 mb-8">Dans je mee?</p>
        <VimeoVideo
          title="Stichting Intocht Sint Nicolaas Huizen Intocht 2021"
          url="https://player.vimeo.com/video/650779183?h=8770fcab97&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        />
      </Section>

      <Section>
        <h3>Downloads</h3>
        <ul className="list-disc">
          <li>
            <a href="/downloads/brief-aan-omwonenden-2025.pdf" download>
              Brief aan omwonenden m.b.t. de verkeerssituatie{" "}
              {site?.siteMetadata?.arrivalDate}
            </a>
          </li>
          <li>
            <a href="/downloads/draaiboek-sinterklaas-2025.pdf" download>
              Draaiboek 2025. Met een kleurrijk draaiboek wordt een kijkje
              gegeven in de organisatie van de feestelijkheden.
            </a>
          </li>
        </ul>
      </Section>

      <Footer />
    </>
  );
};

export const Head = () => (
  <>
    <meta charSet="utf-8" />
    <link rel="canonical" href="https://www.sintinhuizen.nl" />
    <title>Home | Stichting Intocht Sint Nicolaas Huizen</title>
    <meta
      name="description"
      content="Informatie over de aankomst Sint Nicolaas in de werkhaven van het Nautisch Kwartier!"
    />
  </>
);
export default Home;
