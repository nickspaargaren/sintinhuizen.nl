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
    terugblik: markdownRemark(fileAbsolutePath: { regex: "/terugblik.md/" }) {
      html
    }
  }
`;

const Home = ({ data }: PageProps<Queries.markdownQuery>): ReactElement => {
  const [photos2023, photos2022, drawings] = usePhotoGallery();

  const { berichtsint, terugblik } = data;

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
                <span className="whitespace-nowrap">18 november 2023</span>{" "}
                <small>aan in</small> <strong>Huizen</strong>
              </h1>
              <p>
                Verderop kun je hier alles over lezen!
                <br />
                Hij brengt ook een Glutenvrije Piet mee!
              </p>
            </div>
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
              staat welke cadeautjes de kinderen gevraagd hebben. Hij is erg
              zuinig op <strong>het boek</strong>, want als het kwijtraakt, weet
              hij niet waar de <strong>cadeautjes</strong> naartoe moeten!
            </h3>
          </div>
        </StyledHeader>
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
                <div
                  dangerouslySetInnerHTML={{ __html: terugblik?.html || "" }}
                />
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
            Foto&apos;s van de aankomst op <strong>12 november</strong> 2022
          </h3>
          <p className="text-center mt-4 mb-8">
            Klik op de foto voor een vergroting
          </p>
          <PhotoGallery images={photos2022} />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-center mb-8">
            Video&apos;s van de aankomst op <strong>12 november</strong> 2022
          </h3>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <VimeoVideo
                title="Korte impressie activiteiten op de kade"
                url="https://player.vimeo.com/video/772979203?h=f7b3963557"
              />
            </div>
            <div>
              <VimeoVideo
                title="Sint en burgemeester bezoeken de asielboot"
                url="https://player.vimeo.com/video/772979322?h=c10ed4027a"
              />
            </div>
            <VimeoVideo
              title="Het verleggen van de Asielboot 12 november 07.30 in de mist om de kade vrij te maken voor de aankomst van de Sint"
              url="https://player.vimeo.com/video/772980541?h=f6013edb27"
            />
          </div>
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
