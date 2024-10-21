import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";
import styled from "styled-components";

import gebouwen from "../assets/images/gebouwen.svg";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Letter from "../components/Letter";
import PhotoGallery from "../components/PhotoGallery";
import VimeoVideo from "../components/VimeoVideo";
import usePhotoGallery from "../hooks/usePhotoGallery";

const StyledHeader = styled.div`
  background-image: url(${gebouwen});
  background-size: 825px 175px;
  min-height: inherit;

  .headerintro > div {
    margin-bottom: 20px;
  }

  .illustration img {
    margin: auto auto 0 auto;
    max-height: 80vh;
    width: auto;
  }
`;

const StyledAankomst = styled.div`
  .rotatedImage {
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 10px 39px -5px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    line-height: 0;
    margin: 0 0 30px;
    overflow: hidden;
    padding: 3px;
    position: relative;
    text-align: center;
    transform: rotate(-2deg);
    width: 100%;
  }
`;

export const pageQuery = graphql`
  query markdown {
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

const Home = ({ data }: PageProps<Queries.markdownQuery>): ReactElement => {
  const [photos2023, drawings] = usePhotoGallery();

  const { berichtsint, programHaven, programKrachtcentrale, programParade } =
    data;

  return (
    <>
      <section>
        <StyledHeader className="bg-purple grid gap-8 lg:grid-cols-2 bg-bottom bg-repeat-x max-w-full">
          <div className="headerintro flex flex-col">
            <div>
              <h1>
                <small>Laatste nieuws!</small> <br />
                <strong className="whitespace-nowrap">
                  Sint Nicolaas
                </strong>{" "}
                <small>komt</small>{" "}
                <span className="whitespace-nowrap">16 november 2024</span>{" "}
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
              alt="mijter"
              src="../assets/images/poster-2024.jpg"
              className="w-72"
            />
            <div className="mt-auto">
              <h3>Dag kinderen,</h3>
              <p>
                Sint Nicolaas komt met 28 strooipieten die builtjes met
                pepernoten en snoepjes uitdelen. Zijn vraag is of jullie de lege
                builtjes en ander afval mee naar huis willen nemen of in de
                kliko&apos;s willen gooien die op het haventerrein staan.
                Daarmee sparen we de natuur, zegt de Sint en natuurlijk zijn we
                dat met hem eens!
              </p>
            </div>
          </div>
          <div className="illustration flex flex-col">
            <StaticImage
              src="../assets/images/sinterklaas.png"
              alt="Sinterklaas"
            />
            <h3>
              <strong>Sint Niclolaas</strong> kijkt in het grote boek waarin
              staat welke cadeautjes de kinderen gevraagd hebben.
            </h3>
          </div>
        </StyledHeader>
      </section>

      <section>
        <div>
          <h2 className="text-center mb-8">
            Feestprogramma <strong>16 november</strong>
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
        </div>
      </section>

      <section>
        <div>
          <h2 className="text-center mb-8">
            <strong>Kleurplatenwedstrijd</strong> Sinterklaas intocht 2024
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <StaticImage
                className="w-full"
                src="../assets/images/kleurplaat.jpg"
                alt="Kleurplaat"
              />
            </div>
            <div className="md:col-span-1">
              <Letter>
                <h3>
                  Als je hier op klikt, kun je de kleurplaat downloaden voor de
                  kleurplatenwedstrijd!
                </h3>
                <p>
                  De sleutelpiet heeft het ontvangstcomité gebeld met een
                  vervelend bericht. De sleutelpiet is de sleutel van de kamer
                  van Sinterklaas kwijt… Help jij de sleutelpiet zoeken naar de
                  sleutel bij de intocht van Sinterklaas?
                </p>
                <p>
                  Wil jij ook kans maken op een cadeautje van de Sint? Download
                  dan deze tekening uit en lever hem ingekleurd uiterlijk op 13
                  november in bij de Krachtcentrale!
                </p>
              </Letter>
            </div>
          </div>
        </div>
      </section>

      <section className="bericht">
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
      </section>

      <section>
        <StyledAankomst>
          <h2 className="text-center mb-8">
            Activiteiten Sint Nicolaas <strong>2023</strong> in Huizen
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <Letter>
                <p>
                  De Sint komt 16 november aan in Huizen met zijn hoofdpiet en
                  29 hulppieten.
                </p>
                <p>
                  Je kunt hem zien bij de aankomst in de Werkhaven (14.00 uur),
                  tijdens de optocht in de Havenstraat (15.30 uur) en bij de
                  Krachtcentrale (16.00 uur).
                </p>
                <p>
                  De twee daaropvolgende twee weken gaan Sint en Pieten naar
                  winkelcentrum Oostermeent en winkelcentrum Hart van Huizen.
                </p>
                <p>Je ziet, je hebt veel keus de Sint te zien!</p>
              </Letter>
            </div>
            <div>
              <div className="rotatedImage">
                <StaticImage
                  src="../assets/images/poster-sinterklaas-hart-van-huizen.jpg"
                  alt="Sinterklaas Hart van Huizen.jpg"
                />
              </div>
              <Letter>
                <strong>De activiteiten van Hart van Huizen:</strong>
                <br />
                Op de website{" "}
                <a
                  href="https://hartvanhuizen.nl/activiteiten/sint-in-het-oude-dorp/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  HartvanHuizen.nl
                </a>{" "}
                kun je hier alles over lezen.
              </Letter>
            </div>
            <div>
              <div className="rotatedImage">
                <StaticImage
                  src="../assets/images/poster-sinterklaas-oostermeent.jpg"
                  alt="Sint op de kade in de haven van Huizen"
                />
              </div>
              <Letter>
                De Sint bezoekt ook het winkelcentrum Oostermeent. Voor meer
                informatie zie de website{" "}
                <a
                  href="https://www.winkelcentrumoostermeent.nl"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Winkelcentrumoostermeent.nl
                </a>
              </Letter>
            </div>
          </div>
        </StyledAankomst>
      </section>

      <section>
        <StyledAankomst>
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
                  is voor hen niet altijd feestelijk. Ze mogen de kruidnoten
                  niet eten en highfiven met de Pieten gaat ook al niet, want
                  van kruimels op de handschoen worden zij al ziek.
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
                  Print deze vlag, hang &apos;m aan je pietenmuts of plak m om
                  een stokje heen. Als je &apos;m goed omhoog houdt, ziet
                  Glutenvrije Piet dat jij de glutenvrije kruidnoten mag hebben!
                  Je kunt ook de kleurplaat downloaden, inkleuren en omhoog
                  houden. Verwacht je slecht weer? Dan is lamineren een
                  uitkomst.
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
                  glutenvrije kruidnoten, zodat ze niet vermengd worden met
                  ander snoepgoed. De Glutenvrije Piet houdt een vlag omhoog met
                  het Glutenvrije Piet logo erop. Je herkent hem dus zeker!
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
        </StyledAankomst>
      </section>

      <section>
        <div>
          <h3 className="text-center">
            Foto&apos;s van de aankomst op <strong>18 november</strong> 2023
          </h3>
          <p className="text-center mt-4 mb-8">
            Klik op de foto voor een vergroting
          </p>
          <PhotoGallery images={photos2023} />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-center">
            Bedankt kinderen voor deze <strong>prachtige tekeningen</strong>!
          </h3>
          <p className="text-center mt-4 mb-8">
            Klik op de foto voor een vergroting
          </p>
          <PhotoGallery images={drawings} />
          <StaticImage
            className="block w-full max-w-2xl mx-auto mt-8"
            src="../assets/images/bedankt-sint.jpeg"
            alt="Sint bedankt"
          />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-center mb-8">
            Muziekvideo van de aankomst van Sint Nicolaas op{" "}
            <strong>13 november</strong> 2021
          </h3>
          <p className="text-center mt-4 mb-8">Dans je mee?</p>
          <VimeoVideo
            title="Stichting Intocht Sint Nicolaas Huizen Intocht 2021"
            url="https://player.vimeo.com/video/650779183?h=8770fcab97&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          />
        </div>
      </section>

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
